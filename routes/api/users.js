const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys_prod');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const SavedTreasure = require('../../models/savedTreasure');

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        keyCount: req.user.keyCount,
        savedTreasures: req.user.savedTreasures,
    });
})

router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            errors.email = "Email is taken";
            return res.status(400).json(errors);
        } else {
            const savedTreasures = new SavedTreasure({
                saved: [],
            });

            const newUser = new User({
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: req.body.password,
                keyCount: 0,
                savedTreasures: savedTreasures.id,
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            const payload = { 
                                id: user.id, 
                                email: user.email,
                                firstName: user.firstName,
                                keyCount: user.keyCount,
                                savedTreasures: user.savedTreasures,
                            };

                            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            });
                        })
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) return res.status(400).json(errors)
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(404).json({ email: 'This user does not exist ' });
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user.id,
                            email: user.email,
                            firstName: user.firstName,
                            keyCount: user.keyCount,
                            savedTreasures: user.savedTreasures,
                        }
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            }
                        )
                    } else return res.status(400).json({ password: 'Incorrect password' });
                })
        })
})

router.get('/all', (req, res) => {
    User.find({})
        .then((users) => {res.json(users)})
})

module.exports = router;

const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../../models/user');
const keys = require('../../config/keys');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const Treasure = require('../../models/treasure');

router.get('/current/:id', (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      errors.email = 'Email is taken';
      return res.status(400).json(errors);
    }
    const newUser = new User({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      keyCount: 0,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then((user) => {
            const payload = {
              _id: user.id,
              email: user.email,
              firstName: user.firstName,
              keyCount: user.keyCount,
            };

            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
              res.json({
                success: true,
                token: `Bearer ${token}`,
              });
            });
          })
          .catch((err) => console.log(err));
      });
    });
  });
});

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) return res.status(400).json(errors);
  const { email } = req.body;
  const { password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) return res.status(404).json({ email: 'This user does not exist ' });
      bcrypt.compare(password, user.password)
        .then((isMatch) => {
          if (isMatch) {
            const payload = {
              _id: user.id,
              email: user.email,
              firstName: user.firstName,
              keyCount: user.keyCount,
            };
            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: `Bearer ${token}`,
                });
              },
            );
          } else return res.status(400).json({ password: 'Incorrect password' });
        });
    });
});

router.get('/all', (req, res) => {
  User.find({ email: { $nin: ['admin@treasurebox.com', 'treasure@treasurebox.com', 'seed@seed.com'] } })
    .then((users) => { res.json(users); });
});

router.delete('/:id', (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(() => res.json({}))
    .catch((err) => res.status(400).json(err));
});

router.put('/resetowners', (req, res) => {
  Treasure.updateMany({}, { ownerId: null }, { new: true })
    .then((users) => {
      User.find({})
        .then((users) => { res.json(users); });
    })
    .catch((err) => console.log(err))
    .catch((err) => console.log(err));
});

module.exports = router;

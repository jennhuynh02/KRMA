const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const path = require('path');
const keys = require('../../config/keys');
const passport = require('passport');
const Treasure = require('../../models/treasure');
const User = require('../../models/user');
const SavedTreasure = require('../../models/savedTreasure');

const s3Bucket = new AWS.S3({
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey,
  Bucket: keys.bucketName
});

// UPLOAD FILE
const imageUpload = multer({
  storage: multerS3({
    s3: s3Bucket,
    bucket: keys.bucketName,
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
    }
  }),
  limits: {
    fileSize: 4000000
  },
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('image');

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif|mov/;  // Allowed extensions
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase()); // Check ext
  const mimetype = filetypes.test(file.mimetype);  // Check mime
  if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Error: Images Only!');
    }
  }

router.post('/upload', (req, res) => {
  if (req.body.type === "quote") {
    const newQuote = new Treasure({
      creatorId: req.body.ownerId,
      url: req.body.quote,
      ownerId: null,
      reported: false,
      reportMessage: '',
      type: 'quote',
    })

    User.findByIdAndUpdate(      
      { _id: newQuote.creatorId },
      { $inc: { keyCount: 1 } }, 
      { new: true },
    ).catch(err => console.log(err))

    newQuote.save()

    res.json({
      owner: newQuote.creatorId,
      treasureId: newQuote._id,
      quote: newQuote.url,
      type: newQuote.type
    })
  } else {
    imageUpload(req, res, (error) => {
      if (error) {
        res.json({ error: error })
      } else if (req.file) {
        const uploadedTreasure = new Treasure({
          creatorId: req.body.ownerId,
          url: req.file.location,
          ownerId: null,
          reported: false,
          reportMessage: '',
          type: 'media',
        });

        User.findByIdAndUpdate(      
          { _id: uploadedTreasure.creatorId },
          { $inc: { keyCount: 1 } }, 
          { new: true },
        ).catch(err => console.log(err))
        
        res.json({
          owner: uploadedTreasure.creatorId,
          treasureId: uploadedTreasure._id,
          location: uploadedTreasure.url,
          type: uploadedTreasure.type,
        });
        uploadedTreasure.save();
      }
    });
  }
});

router.get('/all', (req, res) => {
  Treasure.find({})
    .then((treasures) => res.json(treasures))
    .catch((errors) => res.statusMessage(400).json({
      notreasuresfound: "No Treasures Found"
    }))
})

router.get('/new/:id', (req, res) => {
  Treasure.countDocuments({ ownerId: null }).exec(function (err, count) {
    var rand = Math.floor(Math.random() * count)

    Treasure.findOne({ownerId: null}).skip(rand)
      .then(treasure => res.json(treasure))
      .then(() => {
        User.findByIdAndUpdate(      
          { _id: req.params.id },
          { $inc: { keyCount: -1 } }, 
          { new: true },
        )
        .catch(err => res.json(err))
      })
      .catch(err => res.json(err))
  })
}) 
  
router.delete('/:treasureId', (req, res) => {
  Treasure.findByIdAndDelete(req.params.treasureId, function (err) {
    if (err) console.log(err);
    console.log("Successful deletion");
    res.json({});
  });
});

router.put('/edit/:id', function (req, res) { 
  Treasure.findByIdAndUpdate({ _id: req.body.treasure }, {ownerId: req.body.owner},
    {new: true})
    .then(treasure => res.json(treasure))
    .catch(err => console.log(err))
})

//this is the one
router.put('/update/:id', (req, res) => {
  Treasure.findByIdAndUpdate({ _id: req.params.id }, req.body, {new: true})
    .then(treasure => res.json(treasure))
    .catch(err => console.log(err))
})

router.get('/collection/:id', (req, res) => {
  Treasure.find({ ownerId: req.params.id})
    .then((treasures) => res.json(treasures))
    .catch((err) => console.log(err))
})

router.get('/resetowners', (req, res) => {
  Treasure.updateMany({}, {ownerId: null}, {new: true})
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

module.exports = router;

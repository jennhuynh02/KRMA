const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const path = require('path');
const keys = require('../../config/keys_dev');
const passport = require('passport');
const Treasure = require('../../models/treasure');
const User = require('../../models/user');

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
    fileSize: 4000000 // 4MB
  },
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('profileImage');

function checkFileType(file, cb) {
  debugger
  const filetypes = /jpeg|jpg|png|gif/;  // Allowed extensions
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase()); // Check ext
  const mimetype = filetypes.test(file.mimetype);  // Check mime
  if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Error: Images Only!');
    }
  }

// @route POST api/treasure/upload
router.post('/upload', (req, res) => {
  imageUpload(req, res, (error) => {
    debugger
    if (error) {
      console.log('errors', error);
      res.json({
        error: error
      })
    } else {
      const uploadedTreasure = new Treasure({
        creatorId: req.body.ownerId,
        url: req.file.location,
        ownerId: null,
        reported: false,
        reportMessage: '',
        type: '',
      });

      // does not work...yet
      User.findByIdAndUpdate(
        { _id: uploadedTreasure.creatorId },
        { $inc: { keyCount: 1 } },
      );

      uploadedTreasure.save();

      res.json({
        owner: uploadedTreasure.creatorId,
        location: uploadedTreasure.url,
      });
    }
  });
});

module.exports = router;

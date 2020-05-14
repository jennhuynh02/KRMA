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
    fileSize: 4000000 // 4MB
  },
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('profileImage');

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

// @route POST api/treasure/upload
router.post('/upload', (req, res) => {
  imageUpload(req, res, (error) => {
    if (error) {
      console.log('errors', error);
      res.json({
        error: error
      })
    } else if (req.file) {
      const uploadedTreasure = new Treasure({
        creatorId: req.body.ownerId,
        url: req.file.location,
        ownerId: null,
        reported: false,
        reportMessage: '',
        type: 'picture',
      });

      User.updateOne(      
        { _id: req.body.ownerId },
        { $inc: { keyCount: 1 } }, 
        { new: true},
      )

      uploadedTreasure.save();

      res.json({
        owner: uploadedTreasure.creatorId,
        treasureId: uploadedTreasure._id,
        location: uploadedTreasure.url,
      });
      
    // POST request for quotes
    } else if (req.quoteText) {
      // const uploadedQuote = new Treasure({
      //   // shape this however you think will work best
      // });
    }
  });
});

router.get('/all', (req, res) => {
  Treasure.find({}, {url:1, reported:1, reportMessage:1})
    .then((treasures) => res.json(treasures))
    .catch((errors) => res.statusMessage(400).json({
      notreasuresfound: "No Treasures Found"
    }))
})

router.get('/treasure/new', (req, res) => {
  console.log(req.params)
  const num = Treasure.find({ ownerId: null }).countDocuments()
  console.log(num)
  const random = Math.floor(Math.random() * num)

  Treasure.find({ownerId: null}).findOne().skip(random)
    .then(treasure => console.log(treasure))
    .update(     
        { ownerId: req.params.userId }, 
        { new: true })
    .then(() => res.json(treasure))
    .catch(err => res.json(err))
})

//   Treasure.find({ownerId: null}).findOne().skip(random)
//     .then(treasure => {
//       treasure.updateOne(      
//         { _id: req.params.id },
//         { ownerId: req.params.currentUserId }, 
//         { new: true })
//       .then(() => res.json(treasure))
//       .catch(err => res.json(err))
//     }
//   )
// })


// router.get('/savedTreasure/:id', (req, res) => {
//   User.find({ _id: req.params.id })
//       .then((user) => {

//         // console.log(user) // how to key into savedTreasure
//         SavedTreasure.find({ _id: user.savedTreasure })
//           .then(userTreasures => {

//             console.log(userTreasures) // works
//             userTreasures.saved.map((treasureId) => {
//               return (
//                 Treasure.find({id: treasureId})
//               )
//             })
//             .then(treasures => {
//               debugger
//               console.log(treasures)
//             })
//             // .then((treasures) => res.json(treasures));
//           })
//       })
// })

  
router.delete('/:treasureId', (req, res) => {
  console.log(req.params.treasureId)
  Treasure.findByIdAndDelete(req.params.treasureId, function (err) {
  if(err) console.log(err);
  console.log("Successful deletion");
  res.json({});
  });
});

module.exports = router;

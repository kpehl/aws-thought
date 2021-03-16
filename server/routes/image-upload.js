const express = require('express');
const router = express.Router();
const multer = require('multer');
const AWS = require('aws-sdk');
const paramsConfig = require('../utils/params-config');

// temporary storage using multer before upload to S3
const storage = multer.memoryStorage({
    destination: function(req, file, callback) {
      callback(null, '');
    }
  });

// upload object with storage destination and key ('image')
const upload = multer({storage}).single('image');

// S3 service object
const s3 = new AWS.S3({
    apiVersion: '2006-03-01'
})

// post route for the images
router.post('/image-upload', upload, (req, res) => {
    console.log("post('/api/image-upload'", req.file);
    const params = paramsConfig(req.file);
    s3.upload(params, (err, data) => {
      if(err) {
        console.log(err); 
        res.status(500).send(err);
      }
      res.json(data);
    });
  });
  

// router.get('/users', (req, res) => {
//     res.json({"which": "which"})
// });




module.exports = router;

// Import AWS SDK for Node.js
const AWS = require('aws-sdk');
// Import uuid to create a unique S3 bucket name
const { v4: uuidv4 } = require('uuid');

// Set the region
AWS.config.update({region: 'us-east-2'});

// Create S3 service object
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Create a paramteters object to assign metadata for the bucket
const bucketParams = {
    Bucket: "user-images-" + uuidv4()
};

// Call S3 to create the bucket
s3.createBucket(bucketParams, (err, data) => {
    if(err) {
        console.log("Error", err);
    } else {
        console.log("Success");
    }
});
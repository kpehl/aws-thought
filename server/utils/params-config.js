// return a configured params object for file uploads

// dependencies
const { v4: uuidv4 } = require('uuid')

// params function
const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
  
    const imageParams = {
      Bucket: 'user-images-959e11ff-c2a1-49ee-a8c9-22aa937e9db3',
      Key: `${uuidv4()}.${fileType}`,
      Body: fileName.buffer,
      ACL: 'public-read'
    };
  
    return imageParams;
  };

module.exports = params;
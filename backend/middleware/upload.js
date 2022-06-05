const GridFsStorage = require('multer-gridfs-storage');
const multer = require("multer");
const mongoURI = "mongodb://localhost:27017/gallery?readPreference=primary&directConnection=true&ssl=false"
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    if (file.mimetype === 'image/jpeg' || 'image/jpg' || 'image/png') {
      return {
        bucketName: 'photos'
      };
    } else {
      return null;
    }
  }
});
module.exports = multer({ storage });
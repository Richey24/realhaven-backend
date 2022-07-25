const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    // the directory where the files will be stored
    callback(null, __dirname + "/../files/");
  },
  filename: (req, file, callback) => {
    callback(null, String(Date.now()) + file.originalname);
  },
});

// creating an instance
const upload = multer({ storage: storage });

module.exports = upload;

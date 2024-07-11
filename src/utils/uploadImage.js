import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Uploads will be stored in the 'uploads/' directory
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()); // Rename the file to avoid duplicates
  },
});

const upload = multer({ storage });

export default upload;

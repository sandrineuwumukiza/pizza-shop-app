// utils/upload.js
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export default upload;


// import multer from 'multer';


//  const storage = multer.diskStorage({
//   destination:  (req, file, cb) =>{
//     cb(null, './uploads'); 
//   },
//   filename: (req, file, cb) =>{
//     cb(null, file.originalname); 
//   },
// });

// export const upload = multer({ storage: storage });
import multer from "multer";
import { __dirname } from "../index.js";
import cloudinary from "./cloudinary.js";
import {CloudinaryStorage} from 'multer-storage-cloudinary'


const fileFilter = (req, file, cb) => {
  if (true) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};



// Set up the multer storage engine for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: 'products',
    format: async (req, file) => 'png', // Set the file format to PNG
    public_id: (req, file) => `${Date.now()}-${file.originalname}`, // Set the public ID of the file
  },
  
  
})

export const uploadImage = (file) => {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(file.path, { access_mode: 'public' }, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const upload = multer({
  storage: storage,
  // limits: {
  //   fileSize: 1024 * 1024 * 5,
  // },
  fileFilter: fileFilter,
});

export default upload;

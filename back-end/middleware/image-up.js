import multer from 'multer';
import path from 'path';

const imageStorage = multer.diskStorage({
  destination(req, res, cb) {
    let folder = '';

    if (req.baseUrl.includes('post')) {
      folder = posts;
    }

    if (req.baseUrl.includes('user')) {
      folder = users;
    }

    cb(null, `public/${folder}`);
  },
  filename(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const imageUpload = multer({
  storage: imageStorage,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      return cb(new Error('Por favor, envie apenas png ou jpg'));
    }

    cb(undefined, true);
  },
});

module.exports = { imageUpload };

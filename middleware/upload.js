const crypto = require('crypto');
const multer = require('multer');
const path = require('path');
const fs = require('fs')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {

    console.log(req.body);
    console.log(file);

    const filePath = path.join('public', 'images', file.fieldname)

    fs.mkdir(filePath, { recursive: true }, function (err) {
      if (err) {
        console.log(err);

      }
    })

    cb(null, filePath)

  },
  filename: function (req, file, cb) {
    crypto.randomBytes(16, function (err, raw) {
      if (err) return cb(err)
      cb(null, raw.toString('hex') + '-' + file.originalname)
    })
  }
})

const upload = multer({ storage: storage })

module.exports = upload
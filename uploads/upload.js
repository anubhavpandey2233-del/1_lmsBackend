const express = require('express')
const multer  = require('multer')

const crypto = require('crypto')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(16, function (err, raw) {
      if (err) return cb(err)
      cb(null, Date.now() + '-' + file.originalname)
    })
  }
})

app.post('/uploads',upload.single('image'),(req,res)=>{
console.log(req.file);

})

const upload = multer({ storage: storage })
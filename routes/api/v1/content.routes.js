const express = require("express")
const { getAllContent, getContent, deleteContent, editContent, searchbyname, addContent } = require("../../../controller/content.controller")
const router = express.Router()
const upload = require("../../../middleware/upload")
router.use(express.json())

router.get('/getAllContent', getAllContent)
router.get('/getContent/:_id', getContent)

router.post('/postContent', upload.single('content_file'), addContent)

router.put('/updateContent/:_id', editContent)

router.delete('/deleteContent/:_id', deleteContent)
router.get('/searchbyname/:name',searchbyname)
module.exports = router
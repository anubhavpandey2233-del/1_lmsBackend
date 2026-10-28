const express = require("express")
const { getAllSection, addSection, editSection, deleteSection } = require("../../../controller/section.controller")
const router = express.Router()

router.use(express.json())

router.get('/getSection', getAllSection)

router.post('/postSection', addSection)

router.put('/updateSection/:id', editSection)

router.delete('/deleteSection/:id', deleteSection)
module.exports = router
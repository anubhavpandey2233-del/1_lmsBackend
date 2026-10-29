const express = require("express")
const { getAllSection, addSection, editSection, deleteSection, getCatToCourse } = require("../../../controller/section.controller")
const router = express.Router()

router.use(express.json())

router.get('/getSection', getAllSection)
router.get('/getCatToCourse/:_id', getCatToCourse)

router.post('/postSection', addSection)

router.put('/updateSection/:_id', editSection)

router.delete('/deleteSection/:_id', deleteSection)
module.exports = router
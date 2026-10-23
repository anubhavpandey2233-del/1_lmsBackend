const express=require("express")
const { getAllCategories, addCategories, deleteCategories, editCategories, getCategory, searchbyname } = require("../../../controller/categories.controller")
const upload = require("../../../middleware/upload")
const router=express.Router()

router.use(express.json())


router.get('/getCategory/:_id',getCategory)

router.get('/getAllCategory',getAllCategories)

router.post('/postCategory',upload.single('category_img'),addCategories) //upload.single uploads inly single img

router.put('/updateCategory/:_id',editCategories)

router.delete('/deleteCategory/:_id',deleteCategories)

router.get('/searchbyname/:name',searchbyname)

module.exports=router
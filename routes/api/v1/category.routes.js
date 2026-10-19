const express=require("express")
const { getAllCategories, addCategories, deleteCategories, editCategories, getCategory, searchbyname } = require("../../../controller/categories.controller")
const router=express.Router()

router.use(express.json())


router.get('/getCategory/:_id',getCategory)

router.get('/getAllCategory',getAllCategories)

router.post('/postCategory',addCategories)

router.put('/updateCategory/:_id',editCategories)

router.delete('/deleteCategory/:_id',deleteCategories)

router.get('/searchbyname/:name',searchbyname)

module.exports=router
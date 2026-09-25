const express=require("express")
const router=express.Router()

router.use(express.json())

router.get('/getCategory',(req,res)=>{
    res.send("Get Data")
})

router.post('/postCategory',(req,res)=>{
    console.log(req.body);
    res.send("Post Data")
})

router.put('/postCategory/:id',(req,res)=>{
    console.log(req.id);
    res.send("Update Data")
})

router.delete('/deleteCategory/:id',(req,res)=>{
    console.log(req.id);
    res.send("Delete Data")
})
module.exports=router
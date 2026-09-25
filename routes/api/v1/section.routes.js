const express=require("express")
const router=express.Router()

router.use(express.json())

router.get('/getSection',(req,res)=>{
    res.send("Get Data")
})

router.post('/postSection',(req,res)=>{
    console.log(req.body);
    res.send("Post Data")
})

router.put('/updateSection/:id',(req,res)=>{
    console.log(req.id);
    res.send("Update Data")
})

router.delete('/deleteSection/:id',(req,res)=>{
    console.log(req.id);
    res.send("Delete Data")
})
module.exports=router
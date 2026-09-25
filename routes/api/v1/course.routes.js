const express=require("express")
const router=express.Router()

router.use(express.json())

router.get('/getCourse',(req,res)=>{
    res.send("Get Data")
})

router.post('/postCourse',(req,res)=>{
    console.log(req.body);
    res.send("Post Data")
})

router.put('/postCourse/:id',(req,res)=>{
    console.log(req.id);
    res.send("Update Data")
})

router.delete('/deleteCourse/:id',(req,res)=>{
    console.log(req.id);
    res.send("Delete Data")
})
module.exports=router
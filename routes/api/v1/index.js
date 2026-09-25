const express=require("express")
const router=express.Router()

const categoryRoute=require("./category.routes")
const courseRoute=require("./course.routes")
const sectionRoute=require("./section.routes")

router.use("/category",categoryRoute)
router.use("/course",courseRoute)
router.use("/section",sectionRoute)


module.exports=router
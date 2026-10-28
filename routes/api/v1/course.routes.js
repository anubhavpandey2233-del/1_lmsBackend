const express=require("express")
const { getAllCourses, addCourses, deleteCourse,editCourse, getCourse, searchbyname } = require("../../../controller/courses.controller")
const router=express.Router()
const upload = require("../../../middleware/upload")

router.use(express.json())

router.get('/getCourse/:_id',getCourse)

router.get('/getAllCourse',getAllCourses)

router.get('/getCourseByName/:name',searchbyname)

router.post('/postCourse',upload.array('course_img',6),addCourses)

router.put('/updateCourse/:_id',editCourse)

router.delete('/deleteCourse/:_id',deleteCourse)
module.exports=router
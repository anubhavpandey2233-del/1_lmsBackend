const Courses = require('../model/courses.model')
const fs = require('fs');

const getAllCourses = async (req, res) => {
    const courseData = await Courses.find()

    try {
        if (!courseData) {
            return res.status(400).json({
                success: false,
                data: [],
                message: "Courses not found"
            })
        } else {
            return res.status(200).json({
                success: true,
                data: courseData,
                message: "Courses Found"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: [],
            message: "Internal server error" + error.message
        })
    }
}

const getCourse = async (req, res) => {
    const CourseData = await Courses.findById(req.params._id)

    try {
        if (!CourseData) {
            return res.status(400).json({
                success: false,
                data: [],
                message: "Data not fetched"
            })
        }

        res.status(200).json({
            success: true,
            data: CourseData,
            message: "Data fetched"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            data: [],
            message: "Internal server error" + error.message
        })
    }
}

const addCourses = async (req, res) => {
    try {
        console.log("Course body:", req.body);
        console.log("Course files:", req.files);

        let allFiles = [];

        req.files?.forEach((v) => {
            allFiles.push(v.path);
        });

        const AddCourse = await Courses.create({
            ...req.body,
            course_img: allFiles
        });

        return res.status(200).json({
            success: true,
            data: AddCourse,
            message: "Course added"
        });

    } catch (error) {
        console.log("Add Course Error:", error);

        return res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error: " + error.message
        });
    }
};
const deleteCourse = async (req, res) => {
    try {

        console.log("req.params._idreq.params._id", req.params._id);


        const delCourse = await Courses.findByIdAndDelete(req.params._id)

        if (!delCourse) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "Course not deleted"
            })
        }
        res.status(200).json({
            success: true,
            data: delCourse,
            message: "Course deleted"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error" + error.message
        })
    }
}

const editCourse = async (req, res) => {
    try {

        //1. only change data
        //2. change data & change image


        //check req.files    2.     log new file come
        //   no req.files    1.

        console.log("Course updated files....", req.files);
        
        

        if (req.files.length > 0) {

            // findById(req.body._id)
            //delete old images         fs  unlinkSyn

            const oldData = await Courses.findById(req.params._id)

            console.log("req.body._id req.body._id", oldData)

            console.log("Course body bodybodybody :", req.body);

            oldData?.course_img?.map((v) => {
                fs.unlinkSync(v)
            })


            let allFiles = []

            req.files?.forEach((v) => {
                allFiles.push(v.path);
            });


            const EditCourse = await Courses.findByIdAndUpdate(
                req.params._id,
                { ...req.body, course_img: allFiles },
                { new: true }
            )

            if (!EditCourse) {
                return res.status(400).json({
                    success: false,
                    data: null,
                    message: "Course not updated"
                })
            }
            res.status(200).json({
                success: true,
                data: EditCourse,
                message: "Course updated"
            })




        } else {
            console.log("bodyyyyyyyyyyyyy", req.body);

            const EditCourse = await Courses.findByIdAndUpdate(
                req.params._id,
                req.body,
                { new: true }
            )

            if (!EditCourse) {
                return res.status(400).json({
                    success: false,
                    data: null,
                    message: "Course not updated"
                })
            }
            res.status(200).json({
                success: true,
                data: EditCourse,
                message: "Course updated"
            })

        }


    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error" + error.message
        })
    }
}

const searchbyname = async (req, res) => {

    try {

        const CourseData = await Courses.aggregate(
            [
                {
                    $match: {
                        name: req.params.name
                    }
                }
            ]

        )


        if (CourseData.length === 0) {
            return res.status(400).json({
                success: false,
                data: [],
                message: "Data not found"
            })
        }

        res.status(200).json({
            success: true,
            data: CourseData,
            message: "Data found"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            data: [],
            message: "Internal server error" + error.message
        })
    }
}

module.exports = {
    getAllCourses,
    addCourses,
    deleteCourse,
    editCourse,
    getCourse,
    searchbyname
}
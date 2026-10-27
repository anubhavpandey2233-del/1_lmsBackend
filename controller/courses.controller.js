const Courses = require('../model/courses.model')

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
    console.log(req.body);


    console.log("Course Controller", req?.files);

    let allFiles = []

    req?.files?.map((v) => {
        allFiles?.push(v.path)
    })

    const AddCourse = await Courses.create({ ...req.body, course_img: allFiles });

    try {
        if (!AddCourse) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "Course not added"
            })
        }
        res.status(200).json({
            success: true,
            data: AddCourse,
            message: "Course added"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error" + error.message
        })
    }
}

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
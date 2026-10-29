const Courses = require('../model/courses.model')
const Section = require('../model/section.model')

const getAllSection = async (req, res) => {
    const sectionData = await Section.find()

    try {
        if (!sectionData) {
            return res.status(400).json({
                success: false,
                data: [],
                message: "Section not found"
            })
        } else {
            return res.status(200).json({
                success: true,
                data: sectionData,
                message: "Section Found"
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

const addSection = async (req, res) => {
    try {
        // console.log("Course body:", req.body);
        // console.log("Course files:", req.files);

        // let allFiles = [];

        // req.files?.forEach((v) => {
        //     allFiles.push(v.path);
        // });

        const AddSection = await Section.create(req.body);

        return res.status(200).json({
            success: true,
            data: AddSection,
            message: "Course added"
        });

    } catch (error) {
        console.log("Add Section Error:", error);

        return res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error: " + error.message
        });
    }
};
const deleteSection = async (req, res) => {
    try {

        console.log("req.params._idreq.params._id", req.params._id);


        const delSection = await Section.findByIdAndDelete(req.params._id)

        if (!delSection) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "Section not deleted"
            })
        }
        res.status(200).json({
            success: true,
            data: delSection,
            message: "Section deleted"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error" + error.message
        })
    }
}

const editSection = async (req, res) => {
    try {

        const EditSection = await Section.findByIdAndUpdate(
            req.params._id,
            req.body,
            { new: true }
        )

        if (!EditSection) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "Section not updated"
            })
        }
        res.status(200).json({
            success: true,
            data: EditSection,
            message: "Section updated"
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

        const SectionData = await Section.aggregate(
            [
                {
                    $match: {
                        name: req.params.name
                    }
                }
            ]

        )


        if (SectionData.length === 0) {
            return res.status(400).json({
                success: false,
                data: [],
                message: "Data not found"
            })
        }

        res.status(200).json({
            success: true,
            data: SectionData,
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

const getCatToCourse = async (req, res) => {
    const catToCouData = await Courses.find({ category_id: req.params._id })
    console.log("req.params._id Section",req.params._id);
    
    console.log("catToCouDatacatToCouDatacatToCouData",catToCouData);
    
    try {
        if (!catToCouData) {
            return res.status(400).json({
                success: false,
                data: [],
                message: "Category to Course  not found"
            })
        } else {
            return res.status(200).json({
                success: true,
                data: catToCouData,
                message: "Category to Course Found"
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

module.exports = {
    getAllSection,
    addSection,
    deleteSection,
    editSection,
    searchbyname,
    getCatToCourse
}
const Content = require('../model/content.model')
const fs = require('fs');

const getAllContent = async (req, res) => {
    const contentData = await Content.find()

    try {
        if (!contentData) {
            return res.status(400).json({
                success: false,
                data: [],
                message: "Content not found"
            })
        } else {
            return res.status(200).json({
                success: true,
                data: contentData,
                message: "Content Found"
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

const getContent = async (req, res) => {
    const contentData = await Content.findById(req.params._id)

    try {
        if (!contentData) {
            return res.status(400).json({
                success: false,
                data: [],
                message: "Content data not fetched"
            })
        }

        res.status(200).json({
            success: true,
            data: contentData,
            message: "Content data fetched"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            data: [],
            message: "Internal server error" + error.message
        })
    }
}

const addContent = async (req, res) => {
    try {
        console.log("contentData body:", req.body);
        console.log("contentData file:", req.file);

        const AddContent = await Content.create({
            ...req.body,
            content_file: req.file?.path
        });

        return res.status(200).json({
            success: true,
            data: AddContent,
            message: "Content added"
        });

    } catch (error) {
        console.log("Add content Error:", error);

        return res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error: " + error.message
        });
    }
};
const deleteContent = async (req, res) => {
    try {

        console.log("req.params._idreq.params._id", req.params._id);


        const delContent = await Content.findByIdAndDelete(req.params._id)

        if (!delContent) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "Content not deleted"
            })
        }
        res.status(200).json({
            success: true,
            data: delContent,
            message: "Content deleted"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error" + error.message
        })
    }
}

const editContent = async (req, res) => {
    try {

        //1. only change data
        //2. change data & change image


        //check req.files    2.     log new file come
        //   no req.files    1.

        console.log("Content updated files....", req.file);



        if (req.file) {

            // findById(req.body._id)
            //delete old images         fs  unlinkSyn

            const oldData = await Content.findById(req.params._id)

            console.log("req.body._id req.body._id", oldData)

            console.log("Content body bodybodybody :", req.body);

            if (oldData?.content_file) {
                fs.unlinkSync(oldData.content_file)
            }


            const contentFile = req.file.path;


            const EditContent = await Content.findByIdAndUpdate(
                req.params._id,
                { ...req.body,content_file:contentFile },
                { new: true }
            )

            if (!EditContent) {
                return res.status(400).json({
                    success: false,
                    data: null,
                    message: "Course not updated"
                })
            }
            res.status(200).json({
                success: true,
                data: EditContent,
                message: "Course updated"
            })




        } else {
            console.log("bodyyyyyyyyyyyyy", req.body);

            const EditCourse = await Content.findByIdAndUpdate(
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

        const ContentData = await Content.aggregate(
            [
                {
                    $match: {
                        name: req.params.name
                    }
                }
            ]

        )


        if (ContentData.length === 0) {
            return res.status(400).json({
                success: false,
                data: [],
                message: "Data not found"
            })
        }

        res.status(200).json({
            success: true,
            data: ContentData,
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
    getAllContent,
    getContent,
    addContent,
    deleteContent,
    editContent,
    searchbyname,
}
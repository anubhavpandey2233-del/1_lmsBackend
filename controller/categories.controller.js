const Categories = require("../model/categories.model")


const getCategory = async (req, res) => {
    const CategoryData = await Categories.findById(req.params._id)

    try {
        if (!CategoryData) {
            return res.status(400).json({
                success: false,
                data: [],
                message: "Data not fetched"
            })
        }

        res.status(200).json({
            success: true,
            data: CategoryData,
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

const getAllCategories = async (req, res) => {
    const CategoryData = await Categories.find()

    try {
        if (!CategoryData) {
            return res.status(400).json({
                success: false,
                data: [],
                message: "Data not fetched"
            })
        }

        res.status(200).json({
            success: true,
            data: CategoryData,
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

const addCategories = async (req, res) => {
     console.log(req.body);
     
    const AddCategory = await Categories.create(req.body);

   


    try {
        if (!AddCategory) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "Category not added"
            })
        }
        res.status(200).json({
            success: true,
            data: AddCategory,
            message: "Category added"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error" + error.message
        })
    }
}

const deleteCategories = async (req, res) => {
    try {

        const DeleteCategory = await Categories.findOneAndDelete(req.params._id)

        if (!DeleteCategory) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "Category not deleted"
            })
        }
        res.status(200).json({
            success: true,
            data    : DeleteCategory,
            message: "Category deleted"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error" + error.message
        })
    }
}


const editCategories = async (req, res) => {
    try {

        const EditCategory = await Categories.findByIdAndUpdate(
            req.params._id,
            req.body,
            { new: true }
        )

        if (!EditCategory) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "Category not updated"
            })
        }
        res.status(200).json({
            success: true,
            data: EditCategory,
            message: "Category updated"
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

        const CategoryData = await Categories.aggregate(
            [
                {
                    $match: {
                        name: req.params.name
                    }
                }
            ]

        )


        if (CategoryData.length === 0) {
            return res.status(400).json({
                success: false,
                data: [],
                message: "Data not found"
            })
        }

        res.status(200).json({
            success: true,
            data: CategoryData,
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
    getCategory,
    getAllCategories,
    addCategories,
    deleteCategories,
    editCategories,
    searchbyname
}
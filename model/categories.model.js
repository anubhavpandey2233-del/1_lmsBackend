const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema(
    {
        parent_category_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            default: null
        },
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        category_img: {
            type: Array,
            trim: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Categories = mongoose.model('Categories', categoriesSchema);

module.exports = Categories
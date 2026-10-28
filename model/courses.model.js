const mongoose = require('mongoose');

const coursesSchema = new mongoose.Schema(
    {
        category_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },
        name: {
            type: String,
            required: true,
            trim: true,

        },
        description: {
            type: String,
            trim: true,
        },
        fees: {
            type: Number,
            required: true,
            trim: true
        },
        course_img: {
            type: Array,
            trim: true
        },
        isActive: {
            type: Boolean
        },

    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Courses = mongoose.model('Courses', coursesSchema);

module.exports = Courses
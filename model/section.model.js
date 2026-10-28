const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema(
    {
        category_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },
        course_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
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
        isActive: {
            type: Boolean
        },

    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Section = mongoose.model('Section', sectionSchema);

module.exports = Section
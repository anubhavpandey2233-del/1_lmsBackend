const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema(
    {
        category_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Categories",
            required: true
        },
        course_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Courses",
            required: true
        },

        section_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Section",
            required: true
        },
        type: {
            type: String,
            required: true,
            trim: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,

        },

        order: {
            type: Number,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        content_file: {
            type: Array,
            trim: true,
        },

    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Content = mongoose.model('Content', contentSchema);

module.exports = Content
const mongoose = require('mongoose');

const sectionsSchema = new mongoose.Schema({
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
        required,
        trim: true,

    },
    description: {
        type: String,
        trim: true,
    },

});

const Sections = mongoose.model('Sections', sectionsSchema);

module.exports = Sections
const mongoose = require('mongoose');

const coursesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required,
            trim: true,

        },
        description: {
            type: String,
            trim: true,
        },
        fees: {
            type: Number,
            required,
            trim: true
        },
        duration: {
            type: String,
            required,
            trim: true
        },
        intrucotor_id: {
            type: mongoose.Types.ObjectId,
            required,
            trim: true
        },
        isActive: {
            type: Boolean
        },

    },
    {
        timestamps:true,
        versionKey:false
    }
);

const Courses = mongoose.model('Courses', coursesSchema);

module.exports = Courses
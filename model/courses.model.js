const mongoose = require('mongoose');

const coursesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
           required:true,
            trim: true,

        },
        description: {
            type: String,
            trim: true,
        },
        fees: {
            type: Number,
            required:true,
            trim: true
        },
        duration: {
            type: String,
            required:true,
            trim: true
        },
        intrucotor_id: {
            type: mongoose.Types.ObjectId,
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
const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            required:true,
            unique:true,
            trim:true
        },
        description: {
            type:String,
            trim:true
        }
    },
    {
        timestamps:true,
        versionKey:false,
    }
);

const Categories=mongoose.model('Categories',categoriesSchema);

module.exports=Categories
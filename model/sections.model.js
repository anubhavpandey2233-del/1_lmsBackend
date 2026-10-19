const mongoose = require('mongoose');

const sectionsSchema = new mongoose.Schema({
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

const Sections=mongoose.model('Sections',sectionsSchema);

module.exports=Sections
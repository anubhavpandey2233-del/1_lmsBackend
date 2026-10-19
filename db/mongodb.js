const mongoose = require('mongoose');

const mongoDBConnect=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        .then(()=>console.log("Database Connected"))
        .catch((error)=>console.log(error))
        
    } catch (error) {
        console.log("Database not connected.",error);
        
    }
}
module.exports=mongoDBConnect
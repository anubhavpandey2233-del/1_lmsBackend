
const mongoose = require("mongoose");

const mongoDBConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Database not connected.",error);
    }
};

module.exports = mongoDBConnect;

require('dotenv').config()


const express=require("express")
const router =require("./routes/api/v1")
const mongoDBConnect = require('./db/mongodb')
const cors = require('cors')

const app = express()
app.use(cors({
  origin: 'http://localhost:5173',
  credentials:true
}))
app.use("/api/v1", router)

mongoDBConnect();



app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})




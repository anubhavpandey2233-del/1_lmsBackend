require('dotenv').config()
const express=require("express")
const router =require("./routes/api/v1")

const app = express()

app.use("/api/v1", router)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})




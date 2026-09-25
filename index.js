const express=require("express")
const router =require("./routes/api/v1")

const app = express()

app.use("/api/v1", router)

app.listen(4000, () => {
  console.log('Server is running on port 4000')
})
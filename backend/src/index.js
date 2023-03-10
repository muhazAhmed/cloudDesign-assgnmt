const express = require('express')
const cors = require("cors")
const app = express()
const port = 8800
require("dotenv").config();
const mongoose=require("mongoose")
mongoose.set('strictQuery', false)
const route = require ("./route")
const cookieParser = require("cookie-parser")

app.use(cors())
app.use(express.json())
app.use(cookieParser())


mongoose.connect(process.env.MONGO_CONNECTION,{useNewUrlParser:true})
.then(()=>{
    console.log("MongoDB is Connected..")
}).catch(err=>{
    console.log(err.message);
})


app.use('/',route)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
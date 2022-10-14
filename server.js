const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080

app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))



app.listen(3000, ()=>{console.log(`Server is running on http://localhost:${PORT}`)})
const exp = require("express")
const app = exp()
const port = 5000
var bodyParser = require('body-parser')
const mongoose =require("mongoose")
require("dotenv").config()

const dbUrl = process.env.ConnectionString
mongoose.connect(dbUrl)


const db = mongoose.connection

db.once("open",()=>{
    console.log("MONGODB CONNECT  ")
})

db.on("error",()=>{
    console.log("connect error ")
})



// app.use(formData.parse());
app.use(bodyParser.urlencoded({}))
app.use(bodyParser.json())

app.get("/", (req, res) => {

    res.send("Hello world")
})
app.post("/", (req, res) => {
    const {email,password}= req.body
    res.send({
        email,password
    })

})

//port assign 
app.listen(port, () => {
    console.log("Node js Listen on this port ", port)
})
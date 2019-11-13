var express = require("express")
var cors =require("cors")
var bodyParser = require ("body-parser")
var app= express()
vor port = process.env.POT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))

var Users =require('./routes/Users')

app.use('users',Users)

app.listen(port,()=>{
	console.log(Server is running on port :'' + port)
	
})
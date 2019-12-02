var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 3000
var mysql = require('mysql')
var db= require('./database/db')


app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)



//connexion a la base de Donnée

let connexion = mysql.createConnection({
  host : db.hostname,
  user : db.username,
  password : db.password,
  database : db.dbname,
  port : db.port,
})

//routes

//var  sinistreForm =require('./routes/sinistreForm');




connexion.connect((err)=>{
if(!err){
  console.log(" Conneion à la base de données réusssie --> id :"+ connexion.threadId)
}
else{
  console.log("===> [INFO] Echec de la connexion à la base de données: "+ err.message)
}
})





app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})


var bodyParser = require("body-parser");
var express = require("express");
var router = express.Router();
var mysql = require('mysql')
var db= require('../database/db')
var fetch =require('node-fetch')
let checkstatus = require('checkstatus')
let parseJSON = require('parse-json')
let logError = require('log-error')



router.post("/", (req, res) => {
	let sql ="INSERT INTO reclamation  SET ? "
    const type_sinistre = req.body.type_sinistre;
    const ville = req.body.ville;
    const assurance = req.body.assurance;
    const commune = req.body.commune;
    const immatriculation = req.body.immatriculation;

let sinistre = {
	type_sinistre:type_sinistre,
	ville:ville,
	assurance:assurance,
	commune:commune,
	immatriculation:immatriculation,
   }

   //connexion a la base de Donnée

let connexion = mysql.createConnection({
  host : db.hostname,
  user : db.username,
  password : db.password,
  database : db.dbname,
  port : db.port,
})

console.log(sinistre);

connexion.query(sql,sinistre) ,( err,result)=>{
	if(err){
		console.log(err.message)
	}
}


/*
  let donneechain ={
   	"sender":type_sinistre,
   	"receiver":assurance,
   	"amount":2,

   }

  donnechain=json.stringify(donneechain)
  console.log(donnechain) 
   const urls=[
   'http://localhost:5000/transaction',
   'http://localhost:5001/transaction'
   ];

   Promise.all(urls.map(url =>
   	fetch(url,
   	  {
   	  method: "post",
      body: donnechain})
   	.then(checkstatus.checkStatus(url))
   	//.then(donnee => JSON.stringify(donnee))
  // 	.catch(err => console.log(err.message))
   	))
   .then(data => {
   	console.log("retour blockchain", data)
   })

*/

})


module.exports = router;
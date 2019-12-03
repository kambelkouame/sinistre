var bodyParser = require("body-parser");
var express = require("express");
var router = express.Router();
var mysql = require('mysql');
var db= require('../database/db');
var fetch =require('node-fetch');
let checkstatus = require('checkstatus');
let parseJSON = require('parse-json');
let logError = require('log-error');
var cors = require("cors");


//insertion d'une declaration de sinistre

router.post("/", function(req, res){

	let sql ="INSERT INTO reclamation  SET ? ";
    const type_sinistre = req.body.type_sinistre;
    const ville = req.body.ville;
    const assurance = req.body.assurance;
    const commune = req.body.commune;
    const immatriculation = req.body.immatriculation;

     

        //variable d'insertion des sinistres
		
		 
		let sinistre = {
			type_sinistre:type_sinistre,
			ville:ville,
			assurance:assurance,
			commune:commune,
			immatriculation:immatriculation,
		   }

	console.log(sinistre);
       
         //connexion a la base de Donnée

		let connexion = mysql.createConnection({
		  host : db.hostname,
		  user : db.username,
		  password : db.password,
		  database : db.dbname,
		  port : db.port,
		})

 		

		//action d'insertion dans la base de donnée
		
		connexion.query(sql,sinistre) ,( err,result)=>{
			if(err){
				console.log(err.message)
			}
		}

		 
         //Variable contenant les données a inserer dans la blockchain

		 let donneechain ={
		   	"sender":type_sinistre,
		   	"receiver":assurance,
		   	"amount":1,

		   }

          //transformation de donneechain en format JSON

		  donnechain=JSON.stringify(donneechain)
		 
           //Affichage de  donnechain dans le terminal

		  console.log(donnechain) 


		   const urls=[
		   'http://localhost:5000/transaction',
		   'http://localhost:5001/transaction'
		   ];
          let url1='http://localhost:5001/transaction';

		 
		   	fetch(url1,
		   	  {
		   	  method: "POST",
		   	  headers: {
			      'Accept': 'application/json',
			      'Content-Type': 'application/json'
					    },
		      body: donnechain})
		  // 	.then(checkstatus.checkStatus(url))
		   	//.then(donnee => JSON.stringify(donnee))
		  // 	.catch(err => console.log(err.message))
		   .then(data => {
		   	console.log("retour blockchain", data)
		   })



})


module.exports = router;
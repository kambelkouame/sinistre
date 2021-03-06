var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var mysql = require('mysql');
var db= require('../database/db');
var fetch =require('node-fetch');
let checkstatus = require('checkstatus');
let parseJSON = require('parse-json');
let logError = require('log-error');
var cors = require("cors");




	exports.register = function(req,res){

	//variables
			  var today = new Date();
			  var users={
			    "first_name":req.body.first_name,
			    "last_name":req.body.last_name,
			    "email":req.body.email,
			    "password":req.body.password,
			    "created":today,
			    "modified":today
			  }


	   //insertion des utilisateurs dans la base de donnée

		  connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
				  if (error) {
				    console.log("error ocurred",error);
				    res.send({
				      "code":400,
				      "failed":"error ocurred"
				    })
				  }else{
				    console.log('The solution is: ', results);
				    res.send({
				      "code":200,
				      "success":"user registered sucessfully"
				        });
				  }
				  });



	exports.login = function(req,res){
		
		  var email= req.body.email;
		  var password = req.body.password;

	 connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
	  if (error) {
	    // console.log("error ocurred",error);
	    res.send({
	      "code":400,
	      "failed":"error ocurred"
	    })
	  }else{
	    // console.log('The solution is: ', results);
	    if(results.length >0){
	      if(results[0].password == password){
	        res.send({
	          "code":200,
	          "success":"login sucessfull"
	            });
	      }
	      else{
	        res.send({
	          "code":204,
	          "success":"Email and password does not match"
	            });
	      }
	    }
	    else{
	      res.send({
	        "code":204,
	        "success":"Email does not exits"
	          });
	    }
	  }
	  });
	}



}




 



});

module.exports = router;

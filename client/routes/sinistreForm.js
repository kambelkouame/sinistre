var express =require ('express')
var router = express.Router
let mysql =require('mysql')
let db = require ('../database/db')



router.get('/app/assure/Step',function(req,req,next){

	if (req.session.error){
		res.locals.error=req.session.error

	}
})


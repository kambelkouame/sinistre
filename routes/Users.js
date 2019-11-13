const express = require("express")
const users = express.Router()
const cors =require('cors')
const jws = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User =require ("../models/User")
users.use(cors())

process.env.SECREt_KEY = 'secret'

users.post('/register', (req,res)=>{
	const today =new Date()
	const userData ={
		username: req.body.username,
		email:req.body.email,
		password:req.body.password
	}

	User.findOne({
		where:{
			email:req.body.email
		}
	})

	.then(user =>{
		if(!user){
			bcrypt.hash(req.body.password, 10, (err,hash)=>{
				userData.password=
			})
		}
	})
})
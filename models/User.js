
const Sequelize = require("sequelize")
const db =require("../database/db")

module.exports =db.Sequelize.definie(
'login',
{
	id:{
	  type:Sequelize.INTEGER,
	  primaryKey: true,
	  autoIncrement:true
	},
	username:{
		type:Sequelize

	}
	email:{
		type:Sequelize

	}

	password:{
		type:Sequelize

	}
},
{
	timestamps:false
})
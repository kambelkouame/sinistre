const Sequelize =require("sequilize")
const db ={}
const sequelize =new Sequelize("sinistre","root", "",{
	host:'localhost',
	dialect:'mysql',
	operatorAliases:false,

	pool :{
		max:5,
		min:0,
		acquire:30000,
		idle:10000
	}
})

db.Sequelize =Sequelize
db.Sequelize =Sequelize

module.exports = db
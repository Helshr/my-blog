const Sequelize = require('sequelize');
const sequelize = require('../utils/sequelize');

const UsersSchema = {
	id:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},
	username:{ type: Sequelize.STRING,allowNull: false},
	password:{ type: Sequelize.STRING,allowNull: false},
	email:{ type: Sequelize.STRING,allowNull: false},
}

const Users = sequelize.define('users', UsersSchema, {
	timestamps: false
})

module.exports = Users
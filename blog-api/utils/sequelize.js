const Sequelize = require('sequelize');
const config = require('../config/database')

const sequelize = new Sequelize(config.database, config.username, config.password, {
	host: config.host,
	dialect: 'mysql',

	pool: {
		max: 10,
		min: 0,
		acquire: 30000,
		idle: 10000
	},

	//查询 操作符
	operatorsAliases: false
});

module.exports = sequelize

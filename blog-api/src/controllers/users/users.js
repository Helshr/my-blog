const Users = require('../../../models/Users')

exports.login = async (ctx) => {
	try {
		let user = ctx.request.body
		console.log('user: ', user)
		 r = await Users.create(user)
		return r
	} catch (err) {
		throw err
	}
}

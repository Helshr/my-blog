const router = require('koa-router')()
const Users = require('./users')

// 获取用户登陆信息
router.post('/register', Users.login)

module.exports = router
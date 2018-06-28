const koa = require('koa');
const app = new koa();
const bodyParser = require('koa-bodyparser');
const database = require('./config/database')
const session = require('koa-session')
const logger = require('koa-logger')
const json = require('koa-json')
const User = require('./models/Users')
const router = require('koa-router')()

app.keys = ['some secret hurr']


// body-parser 必须在 router 注册之前注册
app.use(logger())
app.use(bodyParser());
app.use(json())
app.use(router.routes());

// 数据表初始化
User.sync()

// 引入路由
const userRoutes = require('./src/controllers/users/router')

// 路由
app.use(userRoutes.routes(), userRoutes.allowedMethods())

app.listen('8090', '127.0.0.1');
console.log('http://127.0.0.1:8090');
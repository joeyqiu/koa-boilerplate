/**
 * 路由管理
 */

const router = require('koa-router')();
const koaBody = require('koa-body');
const render = require('./render');

const home = require('./controllers/home');
// const ball = require('./controllers/ball');

/** 
 * 前台页面相关
 */
router.get('/', home);

/** 
 * 前台接口相关
 */
// router.get('/ball/getInfo', ball.getInfo);


module.exports = router;

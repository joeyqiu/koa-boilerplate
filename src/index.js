const render = require('./render');
const logger = require('koa-logger');
const serve = require('koa-static');
const koaBody = require('koa-body');
const Koa = require('koa');
const favicon = require('koa-favicon');
const app = new Koa();

app.use(favicon(__dirname + '/views/logo.ico'));
app.use(serve(__dirname));
app.use(logger());
app.use(render);
app.use(koaBody());


var router = require('./routes');
app.use(router.routes());

app.listen(3000);

app.on('error', (err, ctx) => {
  log.error('server error', err, ctx)
});
const express = require('express');
const http = require('http');

//setup app & its routes
const app = express();
const routes = require('./routes/index.route');
app.use(routes);

//start http server
const httpServer = http.createServer(app);
httpServer.listen(8080);
console.log(`[Student Api] http server listening at port 8080`);

module.exports = { app };
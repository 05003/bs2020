'use strict'; //정확히, 엄격하게 코드를 건들 것이다 라는 선언

/************* include library **************/
const http    = require('http');
const express = require('express');
const server  = express();

const serverPort = 80; //기본적인 서버 포트


/************* Routing **************/
//웹페이지의 세부 주소를 지정한다.
server.use('/',            require('./server'));
server.use('/api',         require('./api'));
server.use('/arduino',     require('./arduino'));

/************* Running server **************/
const httpServer = http.createServer(server);
httpServer.listen(serverPort, () => {
    const startdate = new Date();
    console.log(`[START SERVER (port ${serverPort}) ${startdate}]`);
});
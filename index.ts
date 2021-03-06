import 'dotenv/config';
require("./config/database");

let appRouter = require('./app');
let http = require('http');

const port = process.env.PORT || '3001';
appRouter.set('port', port);

// Create server
let server = http.createServer(appRouter);

// Listen on provided port
server.listen(port);
server.on("listening", () => {
    console.info("server listen on port : " + port);
});


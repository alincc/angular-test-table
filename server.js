var httpServer = require('http-server');

httpServer.createServer({
  showDir: false
}).listen('8080', 'localhost');

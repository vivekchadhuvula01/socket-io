const http = require('http');
const { config } = require('dotenv')

config();

const server = http.createServer();

server.listen( process.env.PORT || 3000 ,() =>{
  console.log(`server is running on port ${process.env.PORT}`)
});

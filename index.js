const express = require('express');
const {config} = require('dotenv');
const http = require('http');

// const io = require('socket.io')
const { Server } = require('socket.io')
config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let listener = io.listen(server)
listener.socket.on('connection', () => {
  socket.emit('messages', {
    'message':'hello '
  })
})
io.on('connection', (socket) =>{
  console.log('a user is connected')
})

app.listen(process.env.PORT, () => {
  console.log(`server is running on port:${process.env.PORT}`)
})

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/socket', (req,res) => {
  res.sendFile(__dirname + '/public/socket.html')
})

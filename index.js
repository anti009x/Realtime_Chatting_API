const http = require('http');
const socketio = require('socket.io');

const server = http.createServer();
const io = socketio(server, {
  cors: {
    origin: 'http://127.0.0.0:8666',
    methods: ['GET', 'POST']
  }
});
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('message', (message) => {
    console.log('message:', message);
    io.emit('message', message);
  });
  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

/*please dont use port for production*/
/* use this for production*/
/*
if (socket.on){
server.listen(3000, '127.0.0.0', () => {
  console.log('Server is running on');
});
}else{
  console.log("Server Not Found")
}
*/
/* for local*/

server.listen(3000,'127.0.0.0:3000',()=>{
console.log("Server On)
});



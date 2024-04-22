const http = require('http');
const socketio = require('socket.io');

const server = http.createServer();
const io = socketio(server, {
  cors: {
    origin: 'http://192.168.100.56:8888',
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
server.listen(3000, '192.168.100.56', () => {
  console.log('Server is running on http://192.168.100.56:3000');
});
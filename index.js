const http = require('http');
const socketio = require('socket.io');

const server = http.createServer();
const io = socketio(server, {
  cors: {
    origin: 'http://127.0.0.0:8888',
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
server.listen(3000, '127.0.0.0', () => {
  console.log('Server is running on http://127.0.0.0:3000');
});

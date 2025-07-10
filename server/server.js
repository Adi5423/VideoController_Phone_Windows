const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const robot = require('robotjs');
const qrcode = require('qrcode-terminal');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve React build in production
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));

// Fallback to index.html for React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


io.on('connection', socket => {
  socket.on('remote-command', cmd => {
    switch(cmd) {
      case 'PLAY_PAUSE': robot.keyTap('space'); break;
      case 'FORWARD':    robot.keyTap('l');     break;
      case 'BACKWARD':   robot.keyTap('j');     break;
      case 'FULLSCREEN': robot.keyTap('f');     break;   // ← new!
      // add more cases as needed
    }
  });
});

// Listen on port 4000
const PORT = 4000;
server.listen(PORT, () => {
  // Print QR to console for easy scanning
  const url = `http://${getLocalIP()}:${PORT}`;
  console.log(`Server listening on ${url}`);
  qrcode.generate(url, { small: true });
});

function getLocalIP() {
  const os = require('os');
  const ifaces = os.networkInterfaces();
  for (let name in ifaces) {
    for (let iface of ifaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
}

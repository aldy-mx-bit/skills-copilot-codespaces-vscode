// Create new server
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo\n');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('El servidor está escuchando en el puerto 3000');
});
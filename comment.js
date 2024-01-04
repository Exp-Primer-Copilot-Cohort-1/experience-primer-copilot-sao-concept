// Create web server

const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    if (req.url === '/') {
        res.write('Hello world');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');

// Run: node app.js
// Open browser: http://localhost:3000
// Open browser: http://localhost:3000/api/courses
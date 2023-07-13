const http = require('http');
const fs = require('fs');

let port = 8000
let host = 'localhost'

const server = http.createServer((req, res) => {
    let destination = './';
    console.log(req.url);
    switch (req.url) {
        case '/':
            destination += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            destination += 'about.html';
            res.statusCode = 200;
            break;
        case '/contact-me':
            destination += 'contact-me.html'
            res.statusCode = 200;
            break;
        default:
            destination += '404.html'
            res.statusCode = 404;
            break;
    }

    fs.readFile(destination, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    })

})

server.listen(port,host,() => {
    console.log(`Now listening on ${host} on ${port}`);
});
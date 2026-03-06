const http = require('http');

const server = http.createServer((req, res) => {
    switch(req.method) {
        case "GET":
            if (req.url === "/") {
                
            }
            break;
    }
});
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/movies'){
        res.write('All Movies Data in JSON format from Mongo DB');
        res.end();
    }else if(req.url === '/genres'){
        res.write('All Geners Data in JSON format from Mongo DB');
        res.end();
    }else if(req.url === '/artists'){
        res.write('All Artists Data in JSON format from Mongo DB');
        res.end();
        
    }
})

server.listen(3000);
console.log('ServerListening on port 3000...');
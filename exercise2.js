const fs = require("fs");
const server = require("http").createServer();

server.on( "request" , (req, rsp) => {
    const src = fs.createReadStream('./img.jpg');
    src.pipe(rsp);
    //fs.readFile('./img.jpg' , (err , data) => {
      //  rsp.end(data);
   // });
    
    //console.log(req);
    //console.log(rsp);
    //rsp.end("WWWWWWWWWW");
});

server.listen(8080);

var express = require('express');
var fetch = require("node-fetch");
var app = express();
var port = 3000;
var res= "";

function getPromise () {
    return fetch("http://jsonplaceholder.typicode.com/users/");
}

async function sendReq() {
   try {
        let result = await getPromise();
        return result;
    } catch (error) {
        return "Error";
    }
}
console.log("WWWWWWWWWWW");
console.log(sendReq().then(data=> {console.log(data)}));
console.log("GGGGGGGGGGG");
/*
app.get('/users' , function(res , rop){
    rop.status(200);
    rop.set('Content-Type' , 'text/html');
    rop.send('Hi');
    rop.end();
});



app.listen(port , () => {
    console.log("Server is listening");
});*/
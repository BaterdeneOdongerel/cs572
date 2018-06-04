var express = require('express');
var fetch = require("node-fetch");
var rxjs = require("rxjs");
var app = express();
var port = 3000;
var res= "";
const {Observable } = rxjs;

var fetchContent = function(url) {
    return Observable.create(function (observer) {
        request(url, function (error, response, body) {
            if (error) { observer.onError(); }
            else { observer.onNext({response: response, body: body }); }
            observer.onCompleted();
        })
    });
};



console.log(res);

app.enable('case sensitive routing');


const request = async (res , rop) => {
    const response = await fetch("http://jsonplaceholder.typicode.com/users/");
    const json = await response.json();
    await rop.send(json);
    await rop.end();
    await console.log(json);
    return await json;
}

console.log("Promise and Async");



app.get('/users' , function(res , rop){
    rop.status(200);
    rop.set('Content-Type' , 'text/html');
    request(res , rop);
});



app.listen(port , () => {
    console.log("Server is listening");
});
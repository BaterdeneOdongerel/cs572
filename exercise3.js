var EventEmitter = require("events");

class Clock extends EventEmitter {
    constructor(){
        super();
    }
};

var clock = new Clock();
clock.on('tick' , () =>{ console.log("Woohoo"); });
setInterval( () => clock.emit("tick") , 1000 );



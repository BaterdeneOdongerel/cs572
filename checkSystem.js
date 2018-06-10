const os = require('os');

let checkSystem = function(){
    return new Promise(function(resolve, reject){
        if(os.totalmem() < 4*1024*1024*1024)
            reject('This app needs at least 4 GB of RAM')
        else if(os.cpus().length < 2)
            reject('Processor is not supported')
        else
            resolve('System is checked successfully')
    })
}

console.log('Checking your system...');
checkSystem().then(data=>console.log(data)).catch(err=>console.log(err));
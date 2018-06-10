const os = require('os');
const rx = require('rxjs')

let checkSystem = rx.Observable.create(function (observer) {
    observer.next('Checking your system...');
    if (os.totalmem() < 4 * 1024 * 1024 * 1024)
        observer.error('This app needs at least 4 GB of RAM');
    if (os.cpus().length < 2)
        observer.error('Processor is not supported');
    observer.complete();
})

let subscription = checkSystem.subscribe(function (x) { console.log(x) },
    function (err) { console.log(err) },
    function () { console.log('System is checked successfully') })

subscription.unsubscribe(); 

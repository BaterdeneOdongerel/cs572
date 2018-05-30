var fs = require("fs");
var zlib = require("zlib");
var gzip = zlib.createGzip();
var gunzip = zlib.createGunzip();


//var readable = fs.createReadStream("./source.txt");
//var compressed = fs.createWriteStream("./source.txt.gz");
var compressed = fs.createReadStream("./source.txt.gz");
var uncompressed = fs.createWriteStream("./ss.txt");


//readable.pipe(gzip).pipe(compressed);
compressed.pipe(gunzip).pipe(uncompressed);


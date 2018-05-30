var dns = require('dns');
var w3 = dns.lookup('www.mum.edu', function (err, addresses, family) {
  console.log(addresses);
});

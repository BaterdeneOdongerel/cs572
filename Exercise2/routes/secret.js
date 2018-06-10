const express = require('express');
const crypto = require('crypto');
const mongoClient = require('mongodb').MongoClient;
const router = express.Router();

const decipher = crypto.createDecipher('aes256', 'asaadsaad');

/* GET users listing. */
router.get('/', function (req, res, next) {

    mongoClient.connect('mongodb://localhost:27017/test', function(err, client){
        if(err) throw err;
        const db = client.db('test');

        db.collection('homework7').findOne({}, function (err, doc) {
            if(err) throw err;  
            let decrypted = '';
            decipher.on('readable', () => {
                const doc = decipher.read();
                if (doc) {
                    decrypted += doc.toString('utf8');
                }
            });
            decipher.on('end', () => {
                res.send(decrypted);
            });

            decipher.write(doc.message, 'hex');
            decipher.end();
            client.close();
        });
    });
});

module.exports = router;

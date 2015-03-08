var assert = require('assert');
var ubique = require('../../index.js');

suite('quants',function () {
console.log('Testing quants/toweekly ...');
test('toweekly', function (done) {



assert.deepEqual(ubique.toweekly(ubique.datenum(['15-01-15','15-01-23','15-01-30','15-02-04'],'YY-MM-DD'),[100,99,102,103,98]),[[1421280000,1421971200,1422576000,1423008000],[100,99,102,103]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->
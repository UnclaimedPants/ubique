var assert = require('assert');
var ubique = require('../../index.js');

suite('stats',function () {
console.log('Testing stats/moment ...');
test('moment', function (done) {

var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];

assert.deepEqual(ubique.moment(x,3),0.000006609408000000002);
assert.deepEqual(ubique.moment(x,1),6.938893903907229e-19);
assert.deepEqual(ubique.moment(ubique.cat(1,x,y),2),[[0.00048569,0.0025102399999999995]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->
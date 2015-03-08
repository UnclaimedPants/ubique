var assert = require('assert');
var ubique = require('../../index.js');

suite('stats',function () {
console.log('Testing stats/mode ...');
test('mode', function (done) {

var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

assert.deepEqual(ubique.mode(c),3);
assert.deepEqual(ubique.mode(a,0),[5,-1]);
assert.deepEqual(ubique.mode(a),[[5,6,-1]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->
var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/flatten ...');
test('flatten', function (done) {

var l = [[1,1,-1],[1,-2,3],[2,3,1]];

assert.deepEqual(ubique.flatten([[5,6],[7,8]]),[5,7,6,8]);
assert.deepEqual(ubique.flatten([[5,6],[7,8]],1),[5,7,6,8]);
assert.deepEqual(ubique.flatten(l),[1,1,2,1,-2,3,-1,3,1]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->
var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/flipdim ...');
test('flipdim', function (done) {

var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

assert.deepEqual(ubique.flipdim(c),[5,6,3]);
assert.deepEqual(ubique.flipdim(c,1),[5,6,3]);
assert.deepEqual(ubique.flipdim(a),[[5,6,5],[7,8,-1]]);
assert.deepEqual(ubique.flipdim(a,1),[[5,6,5],[7,8,-1]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->
var assert = require('assert');
var ubique = require('../../index.js');

suite('stats',function () {
console.log('Testing stats/corrcoef ...');
test('corrcoef', function (done) {

var c = [5,6,3];
var d = [0.5,-3,2.3];
var l = [[1,1,-1],[1,-2,3],[2,3,1]];

assert.deepEqual(ubique.corrcoef(l),[[1,0.802955068546966,0],[0.802955068546966,0.9999999999999998,-0.5960395606792697],[0,-0.5960395606792697,1]]);
assert.deepEqual(ubique.corrcoef(c,d),[[1,-0.931151195567483],[-0.931151195567483,1]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->
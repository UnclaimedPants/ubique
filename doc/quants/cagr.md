### cagr

Compound annual growth rate


#### Syntax

ubique.cagr(x,p,dim)


#### Description

Compound annual growth rate  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | portfolio/assets returns
|`p` | number | number of years (def: 1)
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var cat = ubique.cat;
var nrows = ubique.nrows;

// CAGR for 10 months on 12 or 0.83 years
ubique.cagr(x,nrows(x)/12);
// 0.229388

ubique.cagr(cat(1,x,y),nrows(x)/12);
// [ [ 0.229388, 0.151999 ] ]
```


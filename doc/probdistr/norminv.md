### norminv

Inverse of the normal cumulative distribution function (cdf)


#### Syntax

ubique.norminv(p,mu,sigma)


#### Description

Returns the inverse cdf for the normal distribution with mean MU  
and standard deviation SIGMA at P value  
  
Default values: MU = 0, SIGMA = 1  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`p` | number | probability value in range [0,1]
|`mu` | number | mean value
|`sigma` | number | standard deviation


#### Examples

```js
var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];

ubique.norminv(0.05);
// -1.64485
ubique.norminv(0.01,ubique.mean(x),ubique.std(x));
// -0.0361422
```


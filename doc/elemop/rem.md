### rem

Remainder after division


#### Syntax

ubique.rem(x,y)


#### Description

Remainder after division. Element-wise for matrix  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | dividend
|`y` | number/array/matrix | divisor


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];

ubique.rem([13,-7],2.2);
// [2, -0.4]
ubique.rem([13,-7],[5,6]);
// [3, -1]
ubique.rem(a,b);
// [[0, 0, 0], [3, 3, -1]]
```


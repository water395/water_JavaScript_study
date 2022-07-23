console.log(undefined > null);
console.log(undefined < null);
console.log(undefined === null);

//undefined和null无法比较，在大于小于的时候 会把原始数据类型转换为数字类型 1. NaN > 0  2.NaN < 0 3.严格相等类型已经不相等
console.log([]+{}); //'[object object]'
console.log({}+[]);//0  //node环境 [object object] //浏览器0

//1. var obj = {}; 对象和数组相加的时候会调用这 obj.valueof()  -> obj.String() -> 报错
//2.{}会忽略 变成 +[] = +'' = 0
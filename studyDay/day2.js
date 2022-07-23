var str = "water"
console.log(str.length)
console.log(str[0]);

//为什么原始数据类型可以和对象一样使用.和索引的方式查找数据呢？
//在js里面如果把一个原始类型当成对象来使用，js会自动做出一些处理，会把原始类型转换会对象，使用每个原始类型对应的包装类
// str[0]  转换 new String(str)[0]
// str.length 转换 new String(str).length
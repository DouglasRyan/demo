数组去重
ES5写法
```
//循环写法
let array = [1,5,2,3,4,2,3,1,3,4]
function unique(){
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (newArr.indexOf(array[i]) < 0 ) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}
unique(array);
```
```
let array = [1,5,2,3,4,2,3,1,3,4]
function unique(array) {
    var newArr = []
    var hash = {}
    for(var i = 0; i < array.length; i++) {
        if(hash[array[i]] === undefined) {
            newArr.push(array[i])
            hash[array[i]] = true
        }
    }
    return newArr
}
unique(array);
```


ES6写法
```
let array = [1,5,2,3,4,2,3,1,3,4]
function unique6(array){
  return [...new Set(array)]
}
unique(array)
```
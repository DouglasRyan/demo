“函数”和“函数内部能访问到的外部变量”的总和，就是一个闭包。
```

function f1(){
    var a=2
    function f2(){
        console.log(a)    
    }
	f2()
    console.log(a)
}
f1()

//  a和f2的总和就叫做闭包
```
闭包的用途：

1.从函数外部读取函数内部的变量 

```
function f1() {
  var a = 1
  function f2() {
    console.log(a)
  }
  return f2
} 
f1()
/*变量a和函数f2组成了一个闭包。
函数f1的返回值是函数f2，而f2可以读取f1的内部变量，所以就可以在f1外部获得f1的内部变量了。 
如果没有f2的话，由于变量的函数作用域的问题，就不能读取f1函数内部的变量*/
```
2. 让变量始终保持在内存中
```
function f1(a){
    return function f2() {
    return a++
    }
}
//外部变量a和函数f2构成了一个闭包
var n=f1(2) //声明一个函数
n.call()    //2
n.call()    //3
var n2=f1(9)    //声明另一个函数
n2.call()   //9
n2.call()   //10
```




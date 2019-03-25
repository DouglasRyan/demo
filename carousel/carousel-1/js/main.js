var $allButtons=$('#buttons>button')
//通过jQuery把符合CSS选择器（#buttons>span）的元素筛选出来,并封装成一个jQuery对象，取名为$allButtons。$allButtons是一个伪数组
console.log($allButtons)
for(let i=0;i<$allButtons.length;i++){
  $($allButtons).on('click',function(x){
    var index=$(x.currentTarget).index()
    var p=index*-300
    $('#images').css({
      transform:'translateX('+p+'px)'
    })
    n=index
    $allButtons.eq(n)
    .addClass('red')
    .siblings('.red').removeClass('red')
  })
}

let n=0
let size=$allButtons.length
let  timeId=setInterval(()=>{

  $allButtons.eq(n%size).trigger('click')
  .addClass('red')
  .siblings('.red').removeClass('red')
  n+=1
},1000)

$('.window').on('mouseenter',function(){
  window.clearInterval(timeId)
})

$('.window').on('mouseleave',function(){
  timeId=setInterval(()=>{

    $allButtons.eq(n%size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')
    n+=1
  },1000)
})














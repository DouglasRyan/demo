var $allButtons = $('#buttons>button')
//通过jQuery把符合CSS选择器（#buttons>span）的元素筛选出来,并封装成一个jQuery对象，取名为$allButtons。$allButtons是一个伪数组
console.log($allButtons)
for (let i = 0; i < $allButtons.length; i++) {//$allButtons是一个伪数组,遍历它
    $($allButtons).on('click', function (x) {       //$($allButtons)的onclick事件
        var index = $(x.currentTarget).index()      //index()从匹配的元素中搜索给定元素的索引值，从0开始计数
        var n = index * -300
        $('#images').css({
            transform: 'translateX(' + n + 'px)'    //实现左移300像素
        })
    })
}


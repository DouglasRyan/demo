let $buttons = $('.buttons>span')
let $slides = $('#slides>div')

let n = 1
let size = $buttons.length

let timeId = timer()


$($buttons).on('click', function (x) {
    let index = $(x.currentTarget).index()
    console.log("这次触发了第" + index + "个按钮的click事件")

    let p = index * -920
    $slides.css({
        transform: `translateX(` + p + `px)`,
        transition: 'all 1s'
    })
    $('.clicked').removeClass('clicked');
    $($buttons[index]).addClass('clicked')
    console.log("上一个是" + n)
    n = index
})

$('.borders').on('mouseenter', function () {
    window.clearInterval(timeId)
    console.log(n)

    console.log("定时器被打破了")
})
$('.borders').on('mouseleave', function () {
    console.log(n)
    timeId = timer()

    console.log("定时器被修好了")
})

function timer() {
    return setInterval(() => {
        playSlide(n % size)
        n += 1
    }, 2000)
}


// function timer() {
//     return setInterval(() => {

//         playSlide(n % size)
//     }, 4000)
// }


function playSlide(m) { //触发（index）个按钮的click事件
    console.log("自动触发了第" + m + "个按钮的click事件")
    $buttons.eq(m).trigger('click')
}




// $('.borders').one('mouseenter', function () {
//     window.clearInterval(timeId)
// })
// $('.borders').on('mouseleave', function () {
//     console.log(n)
//     timer()
//     console.log(n)
// })



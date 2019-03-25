let n
初始化()
setInterval(() => {
    makeLeave(getImage(n))
        .one('transitionend', (e) => {
            makeEnter($(e.currentTarget))
        });

    makeCurrent(getImage(n + 1))
    n += 1
}, 1000)


//初始化
function 初始化() {
    n = 1
    $(`.images>img:child(${n})`).addClass('current')
        .siblings().addClass('enter')
}
//工具函数
function x(n) {
    if (n > 4) {
        n = n % 4
        if (n === 0) {
            n = 4
        }
    }
    return n;
}
function getImage(n) {
    return $(`.images > img:nth-child(${x(n)})`)
}
//状态切换
function makeCurrent($node) {
    return $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node) {
    return $node.removeClass('current enter').addClass('leave')
}
function makeEnter($node) {
    return $node.removeClass('leave enter').addClass('enter')
}

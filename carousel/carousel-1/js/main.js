$(p1).on('click', function () {
    $(images).removeClass('position-2 position-3 positong-4').addClass('position-1')
})
$(p2).on('click', function () {
    $(images).removeClass('position-1 position-3 positong-4').addClass('position-2')
})
$(p3).on('click', function () {
    $(images).removeClass('position-1 position-2 positong-4').addClass('position-3')
})
$(p4).on('click', function () {
    $(images).removeClass('position-1 position-2 positong-3').addClass('position-4')
})
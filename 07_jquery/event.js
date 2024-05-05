//console.log($document);
//jquery 방법
// $(document).ready(function() {
//     console.log('ready - 문서의 DOM이 완성되면 실행되는 이벤트')
// })

// $(function() {
//     console.log('방법2');
// })
//javascript 방법
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('DOMContentLoaded - 문서의 DOM이 완성되면 실행되는 이벤트')
// })

// (function() {
//     console.log('js 방법2')
// })

//마우스 이벤트
$('.hello').click(function() {
    $('.hello').css('color','red')
})
$('.num').click(function() {
    //  $('.num').css('color','blue')
     $(this).css({'color':'blue','font-weight':'bold'}) //누른 곳만 바뀜
})
$('.num').on('click',function() {
    $(this).css({'color':'red','font-weight':'bold'})
})
$('.numbers').mouseover(function() {
    //$('.numbers').css('background-color', 'green')
    $(this).css('background-color','yellow')
})
$('.numbers').on('mouseleave',function() {
    $(this).css('background-color','skyblue')
})
$('.hover').hover(function() {
    $(this).css('color','red')//마우스 가져다가 놓을때
}, function(){
    $(this).css('color','blue')// 마우스 땔 때
})

$(window).scroll(function() {
    console.log('scroll')
})
$(window).on('scroll', function() {
    console.log('scroll')
})

$('.input-key').keydown(function(e) {
    // console.log(e.code)
    if(e.code == 'ArrowUp'){
        console.log('up')
    }else if(e.code == 'ArrowRight'){
        console.log('right')
    }else if(e.code == 'ArrowLeft'){
        console.log('left')
    }else if(e.code == 'ArrowDown'){
        console.log('down')
    }else{
        console.log('others')
    }
})

$('#todo-form').submit(function(e) {
    e.preventDefault();
    const todo = $('input[name=todo]').val()
    console.log(todo)
    $('.todos').append(`<li>${todo}</li>`)
    $('input[name=todo').val("")
})

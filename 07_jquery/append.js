function appendJs() {
    let ul = document.querySelector(".colors")
    let li = document.createElement('li')
    li.innerHTML = '마지막 자식'

    ul.append(li)
}
function appendJquery() {
    $('.colors').append('<li>마지막 자식으로 추가</li>')
}

function prependJs() {
    let ul = document.querySelector(".colors")
    let li = document.createElement('li')
    li.innerHTML = '첫 자식'

    ul.prepend(li)
}
function prependJquery() {
    $('.colors').prepend('<li>첫번재 자식으로 추가</li>')
}

function beforeJs() {
    let green = document.querySelector(".green")
    let li = document.createElement('li')
    li.textContent = '이전 형제'

    green.before(li)
}
function beforeJquery() {
    $('.green').before('<li>이전 형제로 추가</li>')
}

function afterJs() {
    let navy = document.querySelector('.navy')
    let li = document.createElement('li')
    li.textContent='다음 형제'

    navy.after(li)
}
function afterJquery() {
    $('.navy').after('<li>다음 형제로 추가</li>')
}

function removejs() {
    let li = document.querySelector('#li2')
    li.remove()
}
function removejquery() {
    $('#li2').remove()
}

function emptyjs() {
    let ul = document.querySelector('.nums')
    //자바스크립트는 empty가 존재하지 않는다.
    ul.innerHTML = ''
}
function emptyjquery() {
    $('.nums').empty()
}

function findParent(){
    console.log($('.child2').parent());
}
function findParents(){
    console.log($('.child2').parents());
}
function findNext(){
    console.log($('.child2').next());
}
function findPrev(){
    console.log($('.child2').prev());
}
function findChildren(){
    console.log($('.parent').children());
}

function addClass() {
    $('.origin-class').addClass('add')
}
function addClassJs(){
    let p = document.querySelector('origin-class');
    p.classList.add('add-class;)')
}
function removeClass(){
    $('.origin_clas').removeClass('origin-class')
}
function removeClassJs(){
    let p = document.querySelector('origin-class')
    p.classList.remove('origin-class')
}
function hasClass() {
    console.log($('.origin-class').hasClass(".origin-class"))
}
function hasClassJs(){
    let p = document.querySelector('.origin-class');
    console.log(p.classList.contains('orgin-class'));
}

function toggleClass(){
    $('.origin-class').toggleClass('add-class');
}
function toggleClassJs(){
    let p = document.querySelector('.origin-class')
    p.classList.toggle('add-class');
}
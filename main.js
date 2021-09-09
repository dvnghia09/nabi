// Chuyển slider ảnh 
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const slideUp = $('.slide-up')
const slideBack = $('.slide-back')
const widthSlide = $('.slide').clientWidth;
const slideMove =  $('.slide-move')
const maxSlide = widthSlide*2
console.log(maxSlide)
var up = 0


function Up (){
    if(up < maxSlide){
        up += widthSlide
    }else{
        up=0
    }
    slideMove.style.marginLeft = '-' + up + 'px'
}

function Back (){
    if(up > 0){
        up -= widthSlide

    }else{
        up = maxSlide
    }
    slideMove.style.marginLeft = '-' + up + 'px'
}
// Sau 3s chuển slide
setInterval(function(){
    Up()
},4000)

slideUp.onclick = function(){
    Up ()
}

slideBack.onclick = function(){
    Back ()
}
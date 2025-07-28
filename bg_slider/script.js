const body= document.body
const slides= document.querySelectorAll('.slide')
const leftBtn= document.getElementById('left')
const rightBtn= document.getElementById('right')
let activateSlide=0
rightBtn.addEventListener('click',()=>{
    activateSlide++
    if (activateSlide>slides.length - 1){
        activateSlide=0
    }
    setBgToBody()
    setActiveSlide()
})
leftBtn.addEventListener('click',()=>{
    activateSlide--
    if (activateSlide<0){
        activateSlide= slides.length - 1
    }
    setBgToBody()
    setActiveSlide()
})
setBgToBody()
function setBgToBody(){
    body.style.backgroundImage= slides[activateSlide].style.backgroundImage
}
function setActiveSlide(){
    slides.forEach(slide=>slide.classList.remove('active'))
    slides[activateSlide].classList.add('active')
}
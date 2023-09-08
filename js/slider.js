let slides = document.querySelectorAll('.slide')
let dotsList = document.createElement('ul')

let prevArrow = document.createElement('button')
prevArrow.innerText = 'prev'
let nextArrow = document.createElement('button')
nextArrow.innerText = 'next'

prevArrow.classList.add('slider__arrow', 'slider__arrow--prev')
nextArrow.classList.add('slider__arrow', 'slider__arrow--next')

dotsList.classList.add('slider__dots')

for(let i = 0; i < slides.length; i++) {
    let dot = document.createElement('li')
    dot.classList.add('slider__dot')
    let btn = document.createElement('button')
    btn.classList.add('slider__dot-btn')
    btn.innerText = i + 1
    btn.onclick = function(){
        document.querySelector('.slide.--active').classList.remove('--active')
        slides[i].classList.add('--active')
        }
    dot.appendChild(btn)
    dotsList.appendChild(dot);
}

document.querySelector('.slider').appendChild(dotsList)

document.querySelector('.slider').insertBefore(prevArrow, document.querySelector('.slider .slides__container'))

document.querySelector('.slider').appendChild(nextArrow)



// slides.forEach(slide => {
//     slide.onclick = function () {
//         if(event.offsetX > event.target.offsetWidth / 2) {
//             if(event.target.nextElementSibling) {
//                 event.target.nextElementSibling.classList.add('--active')
//                 event.target.classList.remove('--active')
//         }
//     } else {
//         if(event.target.previousElementSibling) {
//             event.target.previousElementSibling.classList.add('--active')
//             event.target.classList.remove('--active')
//         }
//     }
// }
// })

nextArrow.onclick = function () {
    let currentSlide = document.querySelector('.slider .slide.--active')
    currentSlide.classList.remove('--active')
    if (currentSlide.nextElementSibling){
        currentSlide.nextElementSibling.classList.add('--active')
    } else {
        slides[0].classList.add('--active')
    }

}


prevArrow.onclick = function () {
    let currentSlide = document.querySelector('.slider .slide.--active')
    currentSlide.classList.remove('--active')
    if (currentSlide.previousElementSibling){
        currentSlide.previousElementSibling.classList.add('--active')
    } else {
        slides[slides.length - 1].classList.add('--active')
    }
}

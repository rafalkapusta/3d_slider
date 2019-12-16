let carousel = document.querySelector('.carousel');
let dots = document.querySelectorAll('.dot');
let dotsContainer = document.querySelector('.dot__container');
let cellCount = 6;
let selectedIndex = 0;
let dotIndex = 0;

dots[dotIndex].classList.add('chosen');

function rotateCarousel() {
    let angle = selectedIndex / cellCount * -360;
    carousel.style.transform = 'translateZ(-173px) rotateX(' + angle + 'deg)';
}

let prevButton = document.querySelector('.previous-button');

prevButton.addEventListener( 'click', function() {
    dots[dotIndex].classList.remove('chosen');
    selectedIndex--;
    dotIndex--;
    dotIndex < 0&& (dotIndex = dots.length-1);
    dots[dotIndex].classList.add('chosen');
    rotateCarousel();

});

let nextButton = document.querySelector('.next-button');

nextButton.addEventListener( 'click', function() {
    dots[dotIndex].classList.remove('chosen');
    selectedIndex++;
    dotIndex++;
    dotIndex > dots.length-1&& (dotIndex = 0);
    dots[dotIndex].classList.add('chosen');
    rotateCarousel();
});

dotsContainer.addEventListener('click', function (e) {
    let dotsArr = Array.from(dots);
    if(e.target.className === 'dot') {
    selectedIndex = dotsArr.indexOf(e.target);
    dotIndex = dotsArr.indexOf(e.target);
    //console.log(e.target.className);
        dotsArr.forEach((dot, i) => {
            dot.classList.remove('chosen');
            dotsArr[i] === e.target&& dotsArr[i].classList.add('chosen');
        });
    }
    rotateCarousel();
});
let sliderImages = document.querySelectorAll('.slide');
let left = document.querySelector('#arrow-left');
let right = document.querySelector('#arrow-right');

current = 0;

function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages [i].style.display = 'none';
    }
}

function startSlide(){
    reset();
    sliderImages [0].style.display = 'block';
}

function slideLeft(){
    reset();
    sliderImages [current-1].style.display = 'block';
    current--;
}

function slideRight(){
    reset();
    sliderImages [current+1].style.display = 'block';
    current++;
}

left.addEventListener('click', function(){
    if (current === 0){
        current = sliderImages.length;
    }
    slideLeft();
});

right.addEventListener('click', function(){
    if (current === sliderImages.length-1){
        current = -1;
    }
    slideRight();
});

startSlide();

//----------------------------------------content---------------------------------------------

const portfolioItems = document.querySelectorAll('.portfolioItem');

//console.log(portfolioItems);

portfolioItems.forEach(i => {
    i.addEventListener('mouseover', () => {
        i.childNodes[1].classList.add('img-darken');
    });

    i.addEventListener('mouseout', () => {
        i.childNodes[1].classList.remove('img-darken');
    });
});

//----------------------------------------button-----------------------------------------------

/*portfolioItems.forEach(j => {
    j.addEventListener('mouseover', () => {
        j.childNodes[1].classList.add('button-appear');
    });

    j.addEventListener('mouseout', () => {
        j.childNodes[1].classList.remove('button-appear');
    });
});*/


//https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css

//<i class="fa fa-inr"></i>
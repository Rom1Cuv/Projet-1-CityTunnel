let img_slider = document.getElementsByClassName('img_slider');

let etape = 0;

let nbr_img = img_slider.length;

let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function enleverActiveImages() {
    for (let i = 0; i < nbr_img; i++) {
        img_slider[i].classList.remove('active');
    }
}

//Action right button
suivant.addEventListener('click', function () {
    etape++;
    if (etape >= nbr_img) {
        etape = 0;
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active');
}
)

//Action left button
precedent.addEventListener('click', function () {
    etape--;
    if (etape < 0) {
        etape = nbr_img - 1;
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active');
}
)

//Timer carrousel
setInterval(function () {
    etape++;
    if (etape >= nbr_img) {
        etape = 0;
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active');
}, 5000)
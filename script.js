
let degree = 3;
function rotateImage(){
    const image = document.getElementById("ribbon");
    if (degree == 3) {
        degree = -3;
    } else {
        degree = 3;
    }
    image.style.transform = 'rotate(' + degree + 'deg)';
}

setInterval(rotateImage, 500);


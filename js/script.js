"use strict";
const backToTopButton = document.querySelector("#back-to-top");
const body = document.body;

function randomColor(){
    let red = Math.floor((Math.random() * 256));
    let green = Math.floor((Math.random() * 256));
    let blue = Math.floor((Math.random() * 256));

    return `rgb(${red},${green},${blue})`;
}

window.addEventListener("scroll", () => {
    scrollY > 100 ? backToTopButton.style.display = "block" : backToTopButton.style.display = "none" ;
    if (scrollY > 100) {
        body.style.background = randomColor();
    } else if(scrollY > 200){
        body.style.background = randomColor();
    } else if(scrollY > 300){
        body.style.background = randomColor();
    }else if(scrollY > 400){
        body.style.background = randomColor();
    }else if(scrollY > 500){
        body.style.background = randomColor();
    }else if(scrollY > 600){
        body.style.background = randomColor();
    }else if(scrollY > 700){
        body.style.background = randomColor();
    }else if(scrollY > 800){
        body.style.background = randomColor();
    }else if(scrollY > 900){
        body.style.background = randomColor();
    }else if(scrollY > 1000){
        body.style.background = randomColor();
    } else{
        body.style.background = "white"
    }
})


backToTopButton.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
})
let dayNight = document.querySelector('.dayNight');
let menuToggle = document.querySelector('.menuToggle');
let body = document.querySelector('body');
let nav = document.querySelector('.nav');

dayNight.onclick = function(){
    body.classList.toggle('dark');
    dayNight.classList.toggle('active');
}

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
    body.style.overflow = body.style.overflow == "hidden" ? "visible" : "hidden";
}



function preload(){
    document.getElementsByClassName('loading')[0].style.display = "none";
    document.getElementById('webpg').style.display = "block";
}
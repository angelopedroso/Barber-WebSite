let dayNight = document.querySelector('.dayNight');
let menuToggle = document.querySelector('.menuToggle');
let body = document.querySelector('body');
let nav = document.querySelector('.nav');
let btn = document.querySelector('.btn').getElementsByTagName('ion-icon')[0];
let header = document.querySelector('.navmenu');
let links = document.getElementsByTagName("a");


Array.prototype.forEach.call(links, function(elem) {
  let elemAttr = elem.getAttribute("href");
  if(elemAttr && elemAttr.includes("#")) {
    elem.addEventListener("click", function(ev) {
      ev.preventDefault();
      document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
          behavior: "smooth"
        });
    });
  }
});

dayNight.onclick = function(){
    body.classList.toggle('dark');
    dayNight.classList.toggle('active');
}

window.addEventListener('scroll', function(){
    header.classList.toggle('scrl-color', window.scrollY > (6*this.window.innerHeight)/100);
});
  
document.getElementById("navbar").addEventListener('click', function (event) {
    menuToggle.classList.remove('active');
    nav.classList.remove('active');
    header.classList.remove('dft-color');
    body.style.overflow = body.style.overflow == "hidden" ? "visible" : "hidden";
});

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
    header.classList.toggle('dft-color');
    body.style.overflow = body.style.overflow == "hidden" ? "visible" : "hidden";
}

function preload(){
    document.getElementsByClassName('loading')[0].style.display = "none";
    document.getElementById('webpg').style.display = "block";
}
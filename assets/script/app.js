'use strict';

// INITIAL
var [i, j, k] = [0, 0, 0];
document.querySelector('.close-about').style.display = 'none';
let txtArray = ['a Developer', 'a Programmer', 'a Student', 'Melih']
var txt = txtArray[k];
var speed = 150;
var textToType = document.getElementById("typer");
var cursor = document.getElementById("cursor");
var stopped = true;
var url = window.location.href;
const info = document.querySelector('#info');
const resume = document.querySelector('#resume');
const portfolio = document.querySelector('#portfolio');
const tools = document.querySelector('#tools');
const about = document.querySelector('#about');
const sideNav = document.querySelector('.side-nav');
const header = document.querySelector('header');

let navIsClicked = false;

url = url.substring(0, url.lastIndexOf("#"));
window.history.replaceState(null, null, url);


Typer();

// FUNCTIONS
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bookEffect() {
    var y = 35;
    $('.left').css("display", `block`);
    $('.right').css("display", `block`);
    for (let x = 0; x < 35; x++) {
        y--;
        await sleep(10);
        $('.left').css("transform", `skewY(${y}deg)`);
        $('.left').css("-ms-transform", `skewY(${y}deg)`);
        $('.right').css("transform", `skewY(${-y}deg)`);
        $('.right').css("-ms-transform", `skewY(${-y}deg)`);
    }
}

async function Typer() {
    if (j == txt.length) {
        setTimeout(cursorBlink, speed);
        await sleep(4000);
    }
    if (i < txt.length) {
        textToType.innerHTML += txt.charAt(i);
        i++;
        setTimeout(Typer, speed);
        j = i;
    } else if (j > 0) {
        textToType.innerHTML = textToType.innerHTML.slice(0, -1);
        j--;
        setTimeout(Typer, (speed / 3));
    }
    if (textToType.innerHTML == '') {
        k++;
        txt = txtArray[k];
        i = 0;
        if (k >= txtArray.length) {
            k = 0;
            txt = txtArray[k];
        }
    }
}

async function cursorBlink() {
    for (let counter = 0; counter < 3; counter++) {
        cursor.innerHTML += '|';
        await sleep(500);
        cursor.innerHTML = '';
        await sleep(500);
    }
    cursor.innerHTML = '';
}

// ON SCROLL FUNCTIONS

window.addEventListener("scroll", () => {
    if (scrollX < 1366) {

    }
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 30 && !navIsClicked) {
        sideNav.style.display = 'flex'
        header.classList.add('scrolled');
    }
    if (navIsClicked && window.scrollY > 30) {
        header.classList.add('scrolled');
        sideNav.style.display = 'flex';
    } else if (window.scrollY == 0) {
        sideNav.style.display = 'none';
        header.classList.remove('scrolled');
        if (window.screen.width < 1366) {
            header.classList.add('scrolled');
        }
    }
    if (window.screen.width > 1366 && window.scrollY < 30 && navIsClicked) {
        header.classList.remove('scrolled');
        header.classList.remove('clicked');
    }

    if (window.screen.width > 1366 && window.scrollY > 30 && navIsClicked) {
        header.classList.add('scrolled');
        header.classList.add('clicked');
    }

})


// ONCLICK FUNCTIONS

document.querySelector('.side-nav').addEventListener('click', () => {
    navIsClicked = !navIsClicked;
    if (navIsClicked) {
        document.querySelector('.side-nav-img').classList.add('close');
        document.querySelector('.close').classList.remove('side-nav-img');
        header.classList.add('scrolled');
        header.classList.add('clicked');
    } else {
        document.querySelector('.close').classList.add('side-nav-img');
        document.querySelector('.side-nav-img').classList.remove('close');
        sideNav.style.display = 'flex';
        header.classList.remove('clicked');
    }
})

about.addEventListener('click', () => {
    document.querySelector('#hiddens').style.opacity = '1';
    window.location.href = '#about';
    resume.classList.add('shift-right');
    tools.classList.add('shift-right');
    info.classList.add('shift-left');
    portfolio.classList.add('shift-left');
    document.querySelector('.close-about').style.display = 'block';
})

document.querySelector('.close-about').addEventListener('click', () => {
    document.querySelector('.close-about').style.display = 'none';
    document.querySelector('#hiddens').style.opacity = '0';

    document.querySelector('body').classList.add('stop-scrolling');
    resume.classList.add('shift-right');
    tools.classList.add('shift-right');
    info.classList.add('shift-left');
    portfolio.classList.add('shift-left');

    resume.classList.remove('shift-right');
    tools.classList.remove('shift-right');
    info.classList.remove('shift-left');
    portfolio.classList.remove('shift-left');

    if (!stopped) {
        document.querySelector('body').classList.add('stop-scrolling');
    }
    stopped = !stopped;
})

document.querySelector('.close-about').addEventListener('click', () => {
    document.querySelector('body').classList.remove('stop-scrolling');
})

resume.addEventListener('click', () => {
    bookEffect();
    document.querySelector('.close-about').style.display = 'block';
    $(".hidden-resume").css("display", "flex");
    $(".hidden-tools").css("display", "none");
    $(".hidden-portfolio").css("display", "none");
    $(".hidden-about").css("display", "none");


})
tools.addEventListener('click', () => {
    document.querySelector('.close-about').style.display = 'block';
    $(".hidden-resume").css("display", "none");
    $(".hidden-tools").css("display", "block");
    $(".hidden-portfolio").css("display", "none");
    $(".hidden-about").css("display", "none");
})

info.addEventListener('click', () => {
    document.querySelector('.close-about').style.display = 'block';
    $(".hidden-resume").css("display", "none");
    $(".hidden-tools").css("display", "none");
    $(".hidden-portfolio").css("display", "none");
    $(".hidden-about").css("display", "block");
})

portfolio.addEventListener('click', () => {
    document.querySelector('.close-about').style.display = 'block';
    $(".hidden-resume").css("display", "none");
    $(".hidden-tools").css("display", "none");
    $(".hidden-portfolio").css("display", "block");
    $(".hidden-about").css("display", "none");
})
'use strict';
//Typer Coded by github.com/firatmelih && Decleration phase.
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
    }
    else if (j > 0) {
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
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// Calling and running functions
var [i, j, k] = [0, 0, 0];
let txtArray = ['a Developer', 'a Programmer', 'a Student', 'Melih']
var txt = txtArray[k];
var speed = 150;
var textToType = document.getElementById("typer");
var cursor = document.getElementById("cursor");
Typer();

var url = window.location.href;
url = url.substring(0, url.lastIndexOf("#")); 3
window.history.replaceState(null, null, url);

let navIsClicked = false;

window.addEventListener('scroll', () => {
    if (window.scrollY > 90 && !navIsClicked) {
        document.querySelector('header').style.display = 'none';
        document.querySelector('.side-nav').style.display = 'flex'
        document.querySelector('#welcome').classList.add('scrolled');

    }
    if (navIsClicked && window.scrollY > 90) {
        document.querySelector('header').classList.add('scrolled');
        document.querySelector('.side-nav').style.display = 'flex';
    }
    else if (window.scrollY == 0) {
        document.querySelector('header').style.display = 'block';
        document.querySelector('.side-nav').style.display = 'none';
        document.querySelector('header').classList.remove('scrolled');
        document.querySelector('#welcome').classList.remove('scrolled');
    }
})


document.querySelector('.side-nav').addEventListener('click', () => {
    navIsClicked = !navIsClicked;
    if (navIsClicked) {
        document.querySelector('.side-nav-img').classList.add('close');
        document.querySelector('.close').classList.remove('side-nav-img');
        document.querySelector('header').style.display = 'block';
        document.querySelector('#welcome').classList.add('scrolled');
        document.querySelector('header').classList.add('scrolled');
    }
    else {
        document.querySelector('.close').classList.add('side-nav-img');
        document.querySelector('.side-nav-img').classList.remove('close');
        document.querySelector('.side-nav').style.display = 'flex';
        document.querySelector('header').style.display = 'none';

    }
})

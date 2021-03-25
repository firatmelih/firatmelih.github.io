'use strict';

// INITIAL
document.querySelector('.close-about').style.display='none';

window.addEventListener("scroll", ()=>
{
    if(scrollX<1366)
    {

    }
})


async function smth()
{
var y=35;
$('.left').css("display",`block`); 
$('.right').css("display",`block`); 
for(let x=0; x<35; x++)
{
 
    y--;
    await sleep(10);
    // Standard syntax
    $('.left').css("transform",`skewY(${y}deg)`); 
    $('.left').css("-ms-transform",`skewY(${y}deg)`); 
    $('.right').css("transform",`skewY(${-y}deg)`); 
    $('.right').css("-ms-transform",`skewY(${-y}deg)`); 
}
}


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
        // document.querySelector('header').style.display = 'none';
        document.querySelector('.side-nav').style.display = 'flex'
        document.querySelector('#welcome').classList.add('scrolled');
        document.querySelector('header').classList.add('scrolled');
    }
    if (navIsClicked && window.scrollY > 90) {
        document.querySelector('header').classList.add('scrolled');
        document.querySelector('#welcome').classList.add('scrolled');
        document.querySelector('.side-nav').style.display = 'flex';
    }
    else if (window.scrollY == 0) {
        // document.querySelector('header').style.display = 'block';
        document.querySelector('.side-nav').style.display = 'none';
        document.querySelector('header').classList.remove('scrolled');
        document.querySelector('#welcome').classList.remove('scrolled');
        if(scrollX<1366)
    {
        document.querySelector('header').classList.add('scrolled');
        
    }
    }
})


document.querySelector('.side-nav').addEventListener('click', () => {
    navIsClicked = !navIsClicked;
    if (navIsClicked) {
        document.querySelector('.side-nav-img').classList.add('close');
        document.querySelector('.close').classList.remove('side-nav-img');

        document.querySelector('#welcome').classList.add('scrolled');
        document.querySelector('header').classList.add('scrolled');
        document.querySelector('header').classList.add('clicked');
    }
    else {
        document.querySelector('.close').classList.add('side-nav-img');
        document.querySelector('.side-nav-img').classList.remove('close');
        document.querySelector('.side-nav').style.display = 'flex';

        document.querySelector('header').classList.remove('clicked');

    }
})

const info = document.querySelector('#info');
const resume = document.querySelector('#resume');
const portfolio = document.querySelector('#portfolio');
const tools = document.querySelector('#tools');




const about = document.querySelector('#about');
var stopped=true;

about.addEventListener('click', ()=>
{
    document.querySelector('#hiddens').style.opacity = '1';
    window.location.href='#about';
    resume.classList.add('shift-right');
    tools.classList.add('shift-right');
    info.classList.add('shift-left');
    portfolio.classList.add('shift-left');
    document.querySelector('.close-about').style.display='block';
})

document.querySelector('.close-about').addEventListener('click', ()=>
{
    document.querySelector('.close-about').style.display='none';
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
    
    if(!stopped)
    {
        document.querySelector('body').classList.add('stop-scrolling');
    }
    stopped=!stopped;
})

document.querySelector('.close-about').addEventListener('click',()=>
{
    
    document.querySelector('body').classList.remove('stop-scrolling');

   
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  


resume.addEventListener('click',()=>
{
    smth();
    document.querySelector('.close-about').style.display='block';
    $(".hidden-resume").css("display", "flex");
    $(".hidden-tools").css("display", "none");
    $(".hidden-portfolio").css("display", "none");
    $(".hidden-about").css("display", "none");

    
})
tools.addEventListener('click',()=>
{
    document.querySelector('.close-about').style.display='block';
    $(".hidden-resume").css("display", "none");
    $(".hidden-tools").css("display", "block");
    $(".hidden-portfolio").css("display", "none");
    $(".hidden-about").css("display", "none");
})
info.addEventListener('click',()=>
{
    document.querySelector('.close-about').style.display='block';
    $(".hidden-resume").css("display", "none");
    $(".hidden-tools").css("display", "none");
    $(".hidden-portfolio").css("display", "none");
    $(".hidden-about").css("display", "block");
})
portfolio.addEventListener('click',()=>
{
    document.querySelector('.close-about').style.display='block';
    $(".hidden-resume").css("display", "none");
    $(".hidden-tools").css("display", "none");
    $(".hidden-portfolio").css("display", "block");
    $(".hidden-about").css("display", "none");
})


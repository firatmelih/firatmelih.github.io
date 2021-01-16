const upArrow = document.getElementById('up');
const downArrow = document.getElementById('down');

let down = false;
const halfOfPage = document.documentElement.clientHeight / 5;

downArrow.hidden = false;
upArrow.hidden = true;

window.addEventListener('scroll', () => {
  let currentPos = window.scrollY;

  if (currentPos < halfOfPage) {
    downArrow.hidden = false;
    upArrow.hidden = true;
  } else {
    downArrow.hidden = true;
    upArrow.hidden = false;
  }
});

downArrow.addEventListener('click', () => {
  window.scrollTo(0, halfOfPage * 3);
  console.log(window.scrollY);
});

upArrow.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
var pageWidth = document.documentElement.clientWidth;
window.setInterval(function check() {
  if (pageWidth != document.documentElement.clientWidth) {
    pageWidth = document.documentElement.clientWidth;
    if (pageWidth < 850) {
      document.getElementById('container-1').classList.add('large');
      document.getElementById('container-1').classList.remove('normal');
    } else {
      document.getElementById('container-1').classList.add('normal');
      document.getElementById('container-1').classList.remove('large');
    }
  }
}, 500);

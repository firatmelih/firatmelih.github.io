const upArrow = document.getElementById('up');
const downArrow = document.getElementById('down');

let down = false;
const halfOfPage = document.documentElement.clientHeight / 4;

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

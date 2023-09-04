const workBtn = document.querySelector('.work-btn');
const aboutBtn = document.querySelector('.about-btn');
const workScreen = document.querySelector('#work');
const aboutScreen = document.querySelector('#about');

const SELECTED = 'selected';
const SCREEN_UP = 'screen-up';
const SCREEN_FADE_OUT = 'screen-fade-out';
const IMG_BIG = 'img-big';
const IMG_SMALL = 'img-small';

workBtn.classList.add(SELECTED);
aboutScreen.classList.add(SCREEN_FADE_OUT);

workBtn.addEventListener('click', (e) => {
  workBtn.classList.add(SELECTED);
  aboutBtn.classList.remove(SELECTED);
  aboutScreen.classList.add(SCREEN_FADE_OUT);
  workScreen.classList.add(IMG_BIG);
  setTimeout(() => {
    workScreen.classList.remove(SCREEN_UP);
  }, 1000);
  setTimeout(() => {
    workScreen.classList.add(IMG_SMALL);
  }, 900);
  setTimeout(() => {
    workScreen.classList.remove(IMG_BIG);
    workScreen.classList.remove(IMG_SMALL);
  }, 1900);
});

aboutBtn.addEventListener('click', (e) => {
  aboutBtn.classList.add(SELECTED);
  workBtn.classList.remove(SELECTED);
  aboutScreen.classList.remove(SCREEN_FADE_OUT);
  workScreen.classList.add(SCREEN_UP);

  console.log(aboutScreen);
});

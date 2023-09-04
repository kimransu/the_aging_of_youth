const counter = document.querySelector('#value');
const loadingBox = document.querySelector('#loading');
const galleryScreen = document.querySelector('#gallery');
const tiles = document.querySelectorAll('.tile');
const scrollWrap = document.querySelector('#scrollWrap');
const mainScreen = document.querySelector('#main');

const AGE_FADE_OUT_CLASS = 'age-fade-out';
const GALLERY_HIDDEN = 'gallery-hidden';
const TILE_SCALE = 'tile-scale';
const TILES_MOVE = 'tiles-move';
const MAIN_SHOW = 'main-show';
const SCROLL_WRAP_SHOW = 'scroll-wrap-show';
const DISPLAY_NONE = 'd-none';
const WORK_DETAIL_PAGE_SHOW = 'work-detail-page-show';

const speed = 100;

// 이미지 이름 뒤에 붙은 숫자를 저장하는 배열
const imageIdxList = [];

const animate = () => {
  const value = +counter.getAttribute('full-age');
  const data = +counter.innerText;

  const time = value / speed;
  if (data < value) {
    counter.innerText = Math.ceil(data + time);
    setTimeout(animate, 10);
  } else {
    counter.innerText = value;
    loadingBox.classList.add(AGE_FADE_OUT_CLASS);

    setTimeout(() => {
      galleryScreen.classList.remove(GALLERY_HIDDEN);
    }, 2000);

    setTimeout(() => {
      const indexList = [0, 7, 10, 13, 15, 17, 19];
      for (let index of indexList) {
        addTileClass(index);
      }
    }, 2100);

    setTimeout(() => {
      const indexList = [1, 3, 6, 8, 11, 16, 18];
      for (let index of indexList) {
        addTileClass(index);
      }
    }, 2200);

    setTimeout(() => {
      const indexList = [2, 4, 5, 9, 12, 14];
      for (let index of indexList) {
        addTileClass(index);
      }
    }, 2300);

    setTimeout(() => {
      for (i = 0; i < 20; i++) {
        tiles[i].classList.add(TILES_MOVE);
      }
    }, 3800);

    setTimeout(() => {
      scrollWrap.classList.add(SCROLL_WRAP_SHOW);
      mainScreen.classList.add(MAIN_SHOW);
      galleryScreen.classList.add(DISPLAY_NONE);
      loadingBox.classList.add(DISPLAY_NONE);

      initHackerText();
    }, 4500);
  }
};

function addTileClass(index) {
  tiles[index].classList.add(TILE_SCALE);
}

// 이미지 초기화
function initImages() {
  getRandomNumbers(20, 1, 20);
  setImages();
  setMainImages();
  animate();
}

// 1 ~ 20까지의 숫자 중 무작위로 10개 조회(중복 없음)
function getRandomNumbers(count, min, max) {
  const numbers = []; // min부터 max까지의 숫자를 순차적으로 저장
  for (let i = min; i <= max; i++) {
    numbers.push(i); // 이 곳에서 숫자를 저장
  }

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const getNumber = numbers.splice(randomIndex, 1);
    imageIdxList.push(getNumber[0]);
  }
}

// 이미지를 tiles에 적용
function setImages() {
  for (let i = 0; i < imageIdxList.length; i++) {
    let imageNumber = imageIdxList[i];
    if (imageNumber < 10) {
      imageNumber = '0' + imageNumber;
    }
    const imagePath = './images/main' + imageNumber + '.jpeg';
    const tile = tiles[i];
    tile.style.backgroundImage = `url('${imagePath}')`;
    tile.style.backgroundSize = 'contain';
    tile.style.backgroundRepeat = 'no-repeat';
  }
}

function setMainImages() {
  let imageNumber =
    imageIdxList[Math.floor(Math.random() * imageIdxList.length)];
  if (imageNumber < 10) {
    imageNumber = '0' + imageNumber;
  }
  const imagePath = './images/main' + imageNumber + '.jpeg';
  mainScreen.style.backgroundImage = `url('${imagePath}')`;
}

setInterval(setMainImages, 6000);

// 이미지 초기화 시작
initImages();

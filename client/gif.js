import $ from 'jquery';
import '../static/css/gif.scss';

const SEARCH_TAG = 'cat';
const SEARCH_LENGTH = 30;
const LOOP_DELAY = 7000;

let fetchedData;
let gifs;
let loopIndex = 0;

const $gif = $('#gif');
let isImgLoaded = false;

function draw(src) {
  if (src) {
    console.log('draw', src);
    $gif.css('background-image', `url(${src})`);
  }
}

function next() {
  if (loopIndex < gifs.length - 1) {
    loopIndex++;
    draw(gifs[loopIndex]);
    preload(gifs[loopIndex + 1]);
    setTimeout(next, LOOP_DELAY);
  }
}

function preload(src) {
  isImgLoaded = false;
  const img = new Image();
  img.onload = function () {
    isImgLoaded = true;
  }
  img.src = src;
  console.log('preload', src);
}

function render() {
  draw(gifs[loopIndex]);
  preload(gifs[loopIndex + 1]);
  setTimeout(next, LOOP_DELAY);
}

function getFetchURL(tag, length) {
  return `/api/giphy/${tag}?limit=${length}`;
}

fetch(getFetchURL(SEARCH_TAG, SEARCH_LENGTH)).then(response => {
  return response.json();
}).then(json => {
  fetchedData = json;
  gifs = fetchedData.data.map(el => { return el.images.original.webp; });
  render();
}).catch(err => {
  console.error(err);
});


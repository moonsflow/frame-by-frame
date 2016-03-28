import $ from 'jquery';
import '../static/css/gif.scss';

const SEARCH_TAG = 'art';
const SEARCH_LENGTH = 30;
const LOOP_DELAY = 7000;

let fetchedData;
let gifs;
let loopIndex = 0;

const $gif = $('#gif');


fetch(`/api/giphy/${SEARCH_TAG}?limit=${SEARCH_LENGTH}`)
  .then(response => {
    return response.json();
  }).then(json => {
    fetchedData = json;
    gifs = fetchedData.data.map(el => { return el.images.original.webp });
    render();
  }).catch(err => {
    console.error(err);
  });


function render() {
  draw(gifs[loopIndex]);
  setTimeout(next, LOOP_DELAY);
}

function next() {
  if (loopIndex < gifs.length - 1) {
    loopIndex++;
    draw(gifs[loopIndex]);
    setTimeout(next, LOOP_DELAY);
    // console.log(loopIndex, gifs[loopIndex]);
  }
}

function draw(src) {
  if (src) {
    $gif.css('background-image', `url(${src})`);
  }
}

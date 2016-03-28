import $ from 'jquery';
import moment from 'moment';

import '../static/css/clock.scss';

const CLOCK_DELAY = 1000 * 60;
const $clock = $('#clock');
render();

function render() {
  let now = moment();
  let time = now.format('LT').split(' ');
  let date = now.format('llll').split(',');
  displayClock(time[0], time[1].toLowerCase());
  displayDate(date[0], date[1] + date[2].slice(0, 5));

  setTimeout(render, CLOCK_DELAY);
}

function displayClock(time, ampm) {
  $clock.find('.time').html(`${time} <span class="am-pm">${ampm}</span>`);
}

function displayDate(day, date) {
  $clock.find('.date').text(`${day}, ${date}`);
}
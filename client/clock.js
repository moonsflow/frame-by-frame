import $ from 'jquery';
import moment from 'moment';

import '../static/css/clock.scss';

const CLOCK_DELAY = 1000 * 60;
const $clock = $('#clock');


function render() {
  const now = moment();
  const time = now.format('LT').split(' ');
  const date = now.format('llll').split(',');
  displayClock(time[0], time[1].toLowerCase());
  displayDate(date[0], date[1] + date[2].slice(0, 5));

  setTimeout(render, CLOCK_DELAY);
}

function displayClock(time, ampm) {
  $clock.find('.time').html(`${time} <span class="am-pm">${ampm}</span>`);
}

function displayDate(day, date) {
  $clock.find('.date').text(`${day}, ${date}`);
  // $clock.find('.date').html('7-11 &deg; / clear');
}

render();
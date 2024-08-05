const dataOutput = document.getElementById('dataOutput');
const helloSmartStop = document.getElementById('helloSmartStop');
const greetingAI = `Hello, my Main)`;
const clock = document.getElementById('clock');
let clockInterval;
let returnTimeout;

function displayGreetingAI() {
  dataOutput.textContent = `${greetingAI}`;
  clearInterval(clockInterval);
  setReturnTimeout();
}

function displayFormattedDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  const weekDay = today.toLocaleString('en-us', { weekday: 'short' });

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  let leapYearMessage = '';

  leapYearMessage = isLeapYear(year) ? 'leap' : 'not a leap';

  const formattedDate = `${day} / ${month} / ${year} ${
    leapYearMessage ? `(${leapYearMessage}),` : ''
  } ${weekDay}`;

  dataOutput.textContent = formattedDate;

  clearInterval(clockInterval);
}

function displayClock() {
  const today = new Date();
  const h = today.getHours();
  const m = String(today.getMinutes()).padStart(2, '0');
  const s = String(today.getSeconds()).padStart(2, '0');

  const htmlClock = `<span class="time">${h} : ${m} : ${s}</span>`;
  dataOutput.innerHTML = htmlClock;
}

function startClock() {
  clearInterval(clockInterval);
  displayClock();
  clockInterval = setInterval(displayClock, 1000);
  setReturnTimeout();
}

function setReturnTimeout() {
  clearTimeout(returnTimeout);
  returnTimeout = setTimeout(displayFormattedDate, 5000);
}

document.addEventListener('DOMContentLoaded', displayFormattedDate);
helloSmartStop.addEventListener('click', displayGreetingAI);
clock.addEventListener('click', startClock);

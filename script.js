const dataOutput = document.getElementById('dataOutput');
const airTemperature = document.getElementById('airTemperature');
const helloSmartStop = document.getElementById('helloSmartStop');
const greetingAI = `Hello, my Main)`;

function displayFormattedDate() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const weekDay = today.toLocaleString('en-us', { weekday: 'short' });

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  let leapYearMessage = '';

  // leapYearMessage = isLeapYear(year) ? 'leap' : 'not a leap';

  const formattedDate = `${day} / ${month} / ${year} ${
    leapYearMessage ? `(${leapYearMessage}),` : ''
  } ${weekDay}`;

  dataOutput.textContent = formattedDate;
}

function displayGreetingAI() {
  dataOutput.textContent = `${greetingAI}`;
}

document.addEventListener('DOMContentLoaded', displayFormattedDate);
helloSmartStop.addEventListener('click', displayGreetingAI);

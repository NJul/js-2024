// Dates & times
const now = new Date();

console.log(now); // Mon Jul 29 2024 14:19:10 GMT+0300 (Eastern European Summer Time)
console.log(typeof now); // object

// year, months, day, times
console.log('getFullYear:', now.getFullYear()); // 2024
console.log('getMonth:', now.getMonth()); // 6
console.log('getDate:', now.getDate()); // 29
console.log('getDay:', now.getDay()); // 1
console.log('getHours:', now.getHours()); // 14
console.log('getMinutes:', now.getMinutes()); // 19
console.log('getSeconds:', now.getSeconds()); // 10

// date strings
console.log(now.toDateString()); // Mon Jul 29 2024
console.log(now.toTimeString()); // 15:47:46 GMT+0300 (Eastern European Summer Time)
console.log(now.toLocaleString()); // 7/29/2024, 3:49:53 PM

// timestamps
/*  a time stamp is represented in a date by the number of milliseconds
    since the 1st of January 1970
 */
console.log('timestamp:', now.getTime()); // 1722257081442

const before = new Date('February 1 2019 7:30:59');

console.log(now.getTime(), before); // 1722260781540 Fri Feb 01 2019 07:30:59 GMT+0200 (Eastern European Standard Time)

console.log(now.getTime(), before.getTime()); //

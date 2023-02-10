//Challenge 1//
let currentTime = new Date();
console.log(currentTime);

//Challenge 2//
console.log(currentTime.getMilliseconds());

//Challenge 3//
console.log(currentTime.getDay());

//Challenge 4//
console.log(currentTime.getFullYear());

//Challenge 5 //
console.log(currentTime.getMonth());

//Challenge 6 & 7 //
function formatDate(date) {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
];


let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();

  let formattedDate = `Today is ${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;

  return formattedDate;
}

console.log(formatDate(currentTime));
    

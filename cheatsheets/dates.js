let now = new Date();
console.log(now); // Iso 8601 date and time format
console.log(now.toString()); // local time 
console.log(now.toUTCString()); // utc format
const day = now.getDate();
console.log(day);

let d = new Date('2025-01-01T00:00:00Z'); // passing a specific date
console.log(d); // same
console.log(d.toISOString()); 
console.log(d.toLocaleString());

let date1 = new Date();
date1.setDate(date1.getDate() + 16);
console.log("Check" + date1);

function addDays(date, n) {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + n);
  return newDate;
}
console.log(addDays(new Date(), 5));
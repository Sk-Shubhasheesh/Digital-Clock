const clock = document.getElementById('clock');

// geting date
//let date = new Date()
// display the date
// console.log(date.toLocaleTimeString()); // this date is update only when we refresh the page

// i want to that the date is run every time and updated
setInterval (function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
 }, 1000)

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// capture relevant elements for future rendering
var currentTimeEl = $("#currentDay");
let workMilitaryStart = 7;
let workMilitaryEnd = 18;



const today = dayjs().format('dddd, MMMM D, YYYY');
const testTime = dayjs('2022-11-16T20:00:00');
const testTime2 = dayjs('2022-11-16T22:00:00');
const timeNow = dayjs().format('MM/DD/YYYY HH:mm A');
console.log("Today's Date: " + today);
console.log("Time Now: " + timeNow);
console.log(testTime);
console.log(dayjs().isAfter(testTime));
console.log(dayjs().isAfter(testTime2));

function workHours() {
  var workStart = dayjs().hour(workMilitaryStart).minute(0).second(0);
  var workEnd = dayjs().hour(workMilitaryEnd).minute(0).second(0);
  
  var workHours = workEnd.diff(workStart, 'hours');
  workHour = [workMilitaryStart];
  console.log(workStart);
  console.log(workEnd);  

  for(var i=0; i < workHours; i++) {
    workHour++;
    workHourFormat = dayjs().hour(workHour).minute(0).second(0);
    console.log(workHourFormat.format('ha'));   
    
  }
}




// create function to render current time at top of the page
function displayTimeNow(){
  console.log(currentTimeEl);
  currentTimeEl.text(today);
}



function handleFormSubmit(event) {
  event.preventDefault();

  $(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
}


displayTimeNow();
workHours();
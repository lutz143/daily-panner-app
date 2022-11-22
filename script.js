// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// capture relevant elements for future rendering
var currentTimeEl = $("#currentDay");
var hourContainerEl = $("#time-container");
var timeNodeEl = $("#hour-9");
var taskLog = JSON.parse(window.localStorage.getItem('taskLog')) || [];

let workMilitaryStart = 0;
let workMilitaryEnd = 18;

const today = dayjs().format('dddd, MMMM D, YYYY');
const testTime = dayjs('2022-11-16T20:00:00');
const testTime2 = dayjs('2022-11-16T22:00:00');
const timeNow = dayjs().format('MM/DD/YYYY HH:mm A');

// create function to render current time at top of the page
function displayTimeNow(){
  currentTimeEl.text(today);

  hourContainerEl.append()
}


function workHours() {
  var workStart = dayjs().hour(workMilitaryStart).minute(0).second(0);
  var workEnd = dayjs().hour(workMilitaryEnd).minute(0).second(0);  
  var workHours = workEnd.diff(workStart, 'hours');
  workHour = [workMilitaryStart-1];

  for(var i=0; i < workHours; i++) {
    workHour++;
    var workHourFormat = dayjs().hour(workHour).minute(0).second(0);
    var workCurrentHour = workHourFormat.format('H');
    var workHourFormat = workHourFormat.format('ha');

    var timeNodeEl = document.createElement('div');
    var timeNode = document.createElement('div');
    var textAreaEl = document.createElement('textarea');
    var saveBtn = document.createElement('button');
    var iEl = document.createElement('i');

    if (dayjs().hour() > (workCurrentHour)) {
      timeNodeEl.setAttribute('class', 'row time-block past');
    } else if (dayjs().hour() == workCurrentHour) {
      timeNodeEl.setAttribute('class', 'row time-block present');
    } else {
      timeNodeEl.setAttribute('class', 'row time-block future');
    }

    timeNodeEl.setAttribute('id', workHourFormat);
    timeNode.setAttribute('id', 'taskHour');
    timeNode.setAttribute('class', 'col-2 col-md-1 hour text-center py-3');
    textAreaEl.setAttribute('id', 'taskDescription');
    textAreaEl.setAttribute('class', 'col-8 col-md-10 description');
    textAreaEl.setAttribute('rows', '3');
    saveBtn.setAttribute('class', 'btn saveBtn col-2 col-md-1');
    saveBtn.setAttribute('aria-label', 'save');
    iEl.setAttribute('class', 'fas fa-save');
    iEl.setAttribute('aria-hidden', 'true');

    timeNode.textContent = workHourFormat;

    hourContainerEl.append(timeNodeEl);
    timeNodeEl.append(timeNode);
    timeNodeEl.append(textAreaEl);
    timeNodeEl.append(saveBtn);
    saveBtn.append(iEl);

    // render text content to the text area from localStorage
    $('#12am .description').val(localStorage.getItem('12am'));
    $('#1am .description').val(localStorage.getItem('1am'));
    $('#2am .description').val(localStorage.getItem('2am'));
    $('#3am .description').val(localStorage.getItem('3am'));
    $('#4am .description').val(localStorage.getItem('4am'));
    $('#5am .description').val(localStorage.getItem('5am'));
    $('#6am .description').val(localStorage.getItem('6am'));
    $('#7am .description').val(localStorage.getItem('7am'));
    $('#8am .description').val(localStorage.getItem('8am'));
    $('#9am .description').val(localStorage.getItem('9am'));
    $('#10am .description').val(localStorage.getItem('10am'));
    $('#11am .description').val(localStorage.getItem('11am'));
    $('#12pm .description').val(localStorage.getItem('12pm'));
    $('#1pm .description').val(localStorage.getItem('1pm'));
    $('#2pm .description').val(localStorage.getItem('2pm'));
    $('#3pm .description').val(localStorage.getItem('3pm'));
    $('#4pm .description').val(localStorage.getItem('4pm'));
    $('#5pm .description').val(localStorage.getItem('5pm'));
    $('#6pm .description').val(localStorage.getItem('6pm'));
    $('#7pm .description').val(localStorage.getItem('7pm'));
    $('#8pm .description').val(localStorage.getItem('8pm'));
    $('#9pm .description').val(localStorage.getItem('9pm'));
    $('#10pm .description').val(localStorage.getItem('10pm'));
    $('#11pm .description').val(localStorage.getItem('11pm'));
  }
}

$(document).ready(function() {
  $(".saveBtn").on("click", function(event){
    event.preventDefault();
    var taskHour = $(this).siblings('#taskHour').html();
    var task = $(this).siblings('#taskDescription').val();

    localStorage.setItem(taskHour, task);    
  })
})

$(document).ready(function() {
  $("#clearStorage").on("click", function(){
    localStorage.clear();
    location.reload();
  })
})

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
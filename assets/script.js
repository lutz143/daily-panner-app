// capture relevant elements for future rendering
var currentTimeEl = $("#currentDay");
var hourContainerEl = $("#time-container");
var taskLog = JSON.parse(window.localStorage.getItem('taskLog')) || [];

// set the start and end time for the planner in military time
let workMilitaryStart = 7;
let workMilitaryEnd = 18;

// capture today's date and time now utilizing dayjs() and formatting accordingly
const today = dayjs().format('dddd, MMMM D, YYYY');
const timeNow = dayjs().format('MM/DD/YYYY HH:mm A');

// create function to render current time at top of the page
function displayTimeNow(){
  currentTimeEl.text(today);
  hourContainerEl.append()
}

// create a function that will render the start and end times
function workHours() {
  // set the military start and end time to 0 minutes and 0 seconds in order to iterate
  var workStart = dayjs().hour(workMilitaryStart).minute(0).second(0);
  var workEnd = dayjs().hour(workMilitaryEnd).minute(0).second(0);  
  // capture the number of hours between work start and work finish
  var workHours = workEnd.diff(workStart, 'hours');
  workHour = [workMilitaryStart-1];

  // iterate over the number of work hours, format and display in the daily planner
  for(var i=0; i < workHours; i++) {
    workHour++;
    var workHourFormat = dayjs().hour(workHour).minute(0).second(0);
    var workCurrentHour = workHourFormat.format('H');
    var workHourFormat = workHourFormat.format('ha');

    // capture the relevant elements to render the planner
    var timeNodeEl = document.createElement('div');
    var timeNode = document.createElement('div');
    var textAreaEl = document.createElement('textarea');
    var saveBtn = document.createElement('button');
    var iEl = document.createElement('i');

    // compare the work hour in the planner to the current hour and set the CSS attribute
    // to either a past styling, current styling, or future styling
    if (dayjs().hour() > (workCurrentHour)) {
      timeNodeEl.setAttribute('class', 'row time-block past');
    } else if (dayjs().hour() == workCurrentHour) {
      timeNodeEl.setAttribute('class', 'row time-block present');
    } else {
      timeNodeEl.setAttribute('class', 'row time-block future');
    }

    // set the attributes for styling of the daily planner
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

    // show the hour and append to render on screen
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

// create an on click function to capture the task and the task hour and save to localStorage
$(document).ready(function() {
  $(".saveBtn").on("click", function(event){
    event.preventDefault();
    var taskHour = $(this).siblings('#taskHour').html();
    var task = $(this).siblings('#taskDescription').val();

    localStorage.setItem(taskHour, task);    
  })
})

// create an on click function to clear localStorage
$(document).ready(function() {
  $("#clearStorage").on("click", function(){
    localStorage.clear();
    location.reload();
  })
})

function handleFormSubmit(event) {
  event.preventDefault();

  $(function () {    
  });
}

displayTimeNow();
workHours();
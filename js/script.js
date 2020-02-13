var hourHand = document.querySelector("#hour");
var minuteHand = document.querySelector("#minute");
var secondHand = document.querySelector("#second");

function runTheClock() {
  // fetch current time
  var now = new Date();
  var hr = now.getHours();
  var minutes = now.getMinutes();
  var sec = now.getSeconds();
  //angle move per second
  deltaSec = (sec * 360) / 60;
  deltaMin = (minutes * 360) / 60 + deltaSec / 60;
  deltaHr = (hr * 360) / 12 + (minutes * 360) / 60 / 12;
  //style hands to current time
  hourHand.style.transform = "rotate(" + deltaHr + "deg)";
  minuteHand.style.transform = "rotate(" + deltaMin + "deg)";
  secondHand.style.transform = "rotate(" + deltaSec + "deg)";
}
runTheClock();
playAudio();
var interval = setInterval(runTheClock, 1000);

var selectHour = document.getElementById("hours");
var option = document.createElement("option");
for (var i = 0; i < 25; i++) {
  selectHour.options[selectHour.options.length] = new Option(i);
}
var selectMinute = document.getElementById("minutes");
var option = document.createElement("option");
for (var i = 0; i < 60; i++) {
  selectMinute.options[selectMinute.options.length] = new Option(i);
}

function alarmClock() {
  var selectedHourValue = selectHour.options[selectHour.selectedIndex].value;
  var selectedMinuteValue =
    selectMinute.options[selectMinute.selectedIndex].value;
  var now = new Date();
  var hr = now.getHours();
  var minutes = now.getMinutes();
  if (selectedHourValue === hr && selectedMinuteValue === minutes) {
    playAudio();
  }
}

function playAudio() {
  var audio = new Audio(
    "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
  );
  audio.play();
}

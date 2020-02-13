var hourHand = document.querySelector("#hour");
var minuteHand = document.querySelector("#minute");
var secondHand = document.querySelector("#second");

function runTheClock() {
  // fetch current time
  var now = new Date();
  hr = now.getHours();
  minutes = now.getMinutes();
  sec = now.getSeconds();
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
var interval = setInterval(runTheClock, 1000);

var audio = new Audio(
  "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
);
audio.play();

var selectHour = document.getElementById("hours");
var option = document.createElement("option");
for (var i = 0; i < 24; i++) {
  selectHour.options[selectHour.options.length] = new Option(i + 1, i);
}

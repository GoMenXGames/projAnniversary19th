// Set the date we're counting down to
var countDownDate = new Date("Jul 10, 2021 12:00:00").getTime();

document.getElementById("clock").innerHTML = "<div id=\"d\">" + 0 + "</div> <div id=\"h\">" + 0 + "</div> <div id=\"m\">" + 0 + "</div> <div id=\"s\">" + 0 + "</div>"
+ "<div id=\"wd\">Дней</div><div id=\"wh\">Часов</div><div id=\"wm\">Минут</div><div id=\"ws\">Секунд</div>";
// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  let idD = document.getElementById("d");
  if (days != idD.innerHTML) {
    idD.innerHTML = days;
  }

  let idH = document.getElementById("h");
  if (hours != idH.innerHTML) {
    idH.innerHTML = hours;
  }

  let idM = document.getElementById("m");
  if (minutes != idM.innerHTML) {
    idM.innerHTML = minutes;
  }

  let idS = document.getElementById("s");
  if (seconds != idS.innerHTML) {
    idS.innerHTML = seconds;
  }


  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "ТЫ ОПОЗДАЛ!";
  }
}, 1000);

var time = 5;
var interval;

function start() {
  interval = setInterval(timer, 1000);
  $("#home").hide();
  $("#q1").show();
}

function timer() {
  time--;
  $(".time").text(time);
  if (time < 0) {
    time++;
    $(".time").text(time);
    clearInterval(interval);
    endQuiz();
  }
}

function endQuiz() {
  $("#quiz").hide();
  $("#scoreboard-add").show();
}

$("#add").on("click", function () {
  if ($("#initials").val()) {
    localStorage.setItem($("#initials").val(), time);
    $("#scoreboard-add").hide();
    $("#scoreboard").show();
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        $("table").append(
          `<tr><td>${key}</td><td>${value}</td></tr>`
        );
      }
  }
})
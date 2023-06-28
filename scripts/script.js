var time = 80;
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
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(interval);
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
      $("table").append(`<tr><td>${key}</td><td>${value}</td></tr>`);
    }
  }
});

function q1wrong() {
    time -= 10
    if (time < 0) time = 0
    $(".time").text(time);
  $("#feedback").text("Incorrect!");
  $("#feedback").css("color", "red");
  $("#q1").hide();
  $("#q2").show();
}

function q1right() {
  $("#feedback").text("Correct!");
  $("#feedback").css("color", "green");
  $("#q1").hide();
  $("#q2").show();
}

function q2wrong() {
    time -= 10
    if (time < 0) time = 0
    $(".time").text(time);
  $("#feedback").text("Incorrect!");
  $("#feedback").css("color", "red");
  $("#q2").hide();
  $("#q3").show();
}

function q2right() {
  $("#feedback").text("Correct!");
  $("#feedback").css("color", "green");
  $("#q2").hide();
  $("#q3").show();
}

function q3wrong() {
    time -= 10
    if (time < 0) time = 0
    $(".time").text(time);
  $("#feedback").text("Incorrect!");
  $("#feedback").css("color", "red");
  $("#q3").hide();
  $("#q4").show();
}

function q3right() {
  $("#feedback").text("Correct!");
  $("#feedback").css("color", "green");
  $("#q3").hide();
  $("#q4").show();
}

function q4wrong() {
    time -= 10
    if (time < 0) time = 0
    $(".time").text(time);
  $("#feedback").text("Incorrect!");
  $("#feedback").css("color", "red");
  $("#q4").hide();
  $("#q5").show();
}

function q4right() {
  $("#feedback").text("Correct!");
  $("#feedback").css("color", "green");
  $("#q4").hide();
  $("#q5").show();
}

function q5wrong() {
    time -= 10
    if (time < 0) time = 0
    $(".time").text(time);
  $("#feedback").text("Incorrect!");
  $("#feedback").css("color", "red");
  endQuiz()
}

function q5right() {
  $("#feedback").text("Correct!");
  $("#feedback").css("color", "green");
  endQuiz()
}

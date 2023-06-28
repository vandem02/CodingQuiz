var time = 80
var interval
var timeout

function start() {
    interval = setInterval(timer, 1000)
    timeout = setTimeout(myFunction, 80000)
    $("#home").hide()
    $("#q1").show()
}

function timer() {
    time--
    $("#time").text(time)
}

function endQuiz() {
    
}
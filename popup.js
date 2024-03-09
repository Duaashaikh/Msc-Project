let timerInterval;
let minutes = 25;
let seconds = 0;
let isTimerRunning = false;

function updateTimer() {
    seconds--;
    if (seconds < 0) {
        if (minutes === 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            return;
        }
        minutes--;
        seconds = 59;
    }
    document.getElementById("timer").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

document.getElementById("startButton").addEventListener("click", function () {
    if (!isTimerRunning) {
        timerInterval = setInterval(updateTimer, 1000);
        isTimerRunning = true;
    }
});

document.getElementById("stopButton").addEventListener("click", function () {
    clearInterval(timerInterval);
    isTimerRunning = false;
    // Reset the timer to the default time
    minutes = 25;
    seconds = 0;
    document.getElementById("timer").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});
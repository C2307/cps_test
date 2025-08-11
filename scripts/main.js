let clickCount = 0;
let startTime;
let isTesting = false;
let timeLimit = 10; // seconds
let timerInterval;

document.getElementById("timeset5s").addEventListener("click", function() {
    timeLimit = 5;
    document.getElementById('timer').innerText = `时间: ${timeLimit}s`;
    document.getElementById('dialogshowtime').innerText = `时间: ${timeLimit}s`;
});
document.getElementById("timeset10s").addEventListener("click", function() {
    timeLimit = 10;
    document.getElementById('timer').innerText = `时间: ${timeLimit}s`;
    document.getElementById('dialogshowtime').innerText = `时间: ${timeLimit}s`;
});
document.getElementById("timeset20s").addEventListener("click", function() {
    timeLimit = 20;
    document.getElementById('timer').innerText = `时间: ${timeLimit}s`;
    document.getElementById('dialogshowtime').innerText = `时间: ${timeLimit}s`;
});

document.getElementById('clickButton').addEventListener('click', function() {
    if (!isTesting) {
        isTesting = true;
        startTime = new Date().getTime();
        startTimer();
    }
    clickCount++;
    updateResult();
});

document.getElementById('resetButton').addEventListener('click', function() {
    resetTest();});
document.getElementById('dialogCloseButton').addEventListener('click', function() {
    resetTest();});

function updateResult() {
    let currentTime = new Date().getTime();
    let timeElapsed = (currentTime - startTime) / 1000;
    let cps = (clickCount / timeElapsed).toFixed(2);
    document.getElementById('result').innerText = `点击数: ${clickCount}, CPS: ${cps}`;
    document.getElementById('dialogshowresult').innerText = `点击数: ${clickCount}, CPS: ${cps}`;
    document.getElementById('dialogshowtime').innerText = `时间: ${timeLimit}s`;
}

function startTimer() {
    let timeLeft = timeLimit;
    document.getElementById('timer').innerText = `时间: ${timeLeft}s`;
    timerInterval = setInterval(function() {
        timeLeft--;
        document.getElementById('timer').innerText = `时间: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            isTesting = false;
            document.getElementById('clickButton').disabled = true;
            dialog.open = true;
        }
    }, 1000);
}

function resetTest() {
    clickCount = 0;
    isTesting = false;
    document.getElementById('clickButton').disabled = false;
    document.getElementById('result').innerText = '点击数: 0';
    document.getElementById('timer').innerText = `时间: ${timeLimit}s`;
    clearInterval(timerInterval);
}
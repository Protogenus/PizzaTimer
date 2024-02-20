var intervalId = null; // Store the interval ID globally

document.getElementById('startTimer').addEventListener('click', function(event) {
    event.preventDefault();
    var hours = document.getElementById('hours').value;
    var minutes = document.getElementById('minutes').value;
    var seconds = document.getElementById('seconds').value;
    // Clear the existing timer if there is one
    if (intervalId !== null) {
        clearInterval(intervalId);
    }
    startTimer(hours, minutes, seconds);
});

function startTimer(hours, minutes, seconds) {
    var totalSeconds = hours *   3600 + minutes *   60 + seconds;
    var timerDisplay = document.getElementById('timerDisplay');
    intervalId = setInterval(function() {
        totalSeconds--;
        if (totalSeconds <   0) {
            clearInterval(intervalId);
            intervalId = null; // Reset the interval ID
            playSound('assets/sound.mp3'); // Replace 'sound.mp3' with the path to your sound file
            return;
        }
        var hours = Math.floor(totalSeconds /   3600);
        var minutes = Math.floor((totalSeconds %   3600) /   60);
        var seconds = totalSeconds %   60;
        timerDisplay.textContent = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
    },   1000);
}

function playSound(soundfile) {
    var audio = new Audio(soundfile);
    var volume = document.getElementById('volume').value;
    audio.volume = volume;
    audio.play();
}

const clock = document.getElementById('clock');
let intervalId;

function startInterval() {
    intervalId = setInterval(function() {
        let date = new Date();
        // console.log(date.toLocaleTimeString());
        clock.innerHTML = date.toLocaleTimeString();
    }, 1000);
}

startInterval();

clock.addEventListener('click', function() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    } else {
        startInterval();
    }
});

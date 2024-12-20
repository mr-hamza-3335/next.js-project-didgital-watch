// Function to update the clock
function updateClock() {
    // Get the current time
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    // Convert 24-hour time to 12-hour time
    if (hours > 12) {
        hours -= 12;
    }
    if (hours === 0) {
        hours = 12;
    }
    // Add leading zeros for single digit minutes and seconds
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    // Update the elements in the DOM
    var hoursElement = document.getElementById('hours');
    var minutesElement = document.getElementById('munites');
    var secondsElement = document.getElementById('seconds');
    var ampmElement = document.getElementById('ampm');
    if (hoursElement && minutesElement && secondsElement && ampmElement) {
        hoursElement.textContent = hours.toString();
        minutesElement.textContent = minutes.toString();
        secondsElement.textContent = seconds.toString();
        ampmElement.textContent = ampm;
    }
}
// Call updateClock every second (1000 milliseconds)
setInterval(updateClock, 1000);
// Initial call to set time immediately when the page loads
updateClock();

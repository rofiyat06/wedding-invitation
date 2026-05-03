// Countdown Timer for Aqid Ceremony
// Target date: Sunday, 31st May 2026

function updateCountdown() {
    // Target date: 31st May 2026 at 00:00:00
    var targetDate = new Date('2026-05-31T00:00:00').getTime();
    var now = new Date().getTime();
    var distance = targetDate - now;

    // Calculate time units
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update DOM elements
    var daysEl = document.getElementById('days');
    var hoursEl = document.getElementById('hours');
    var minutesEl = document.getElementById('minutes');
    var secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.textContent = padNumber(days);
    if (hoursEl) hoursEl.textContent = padNumber(hours);
    if (minutesEl) minutesEl.textContent = padNumber(minutes);
    if (secondsEl) secondsEl.textContent = padNumber(seconds);

    // If countdown is finished
    if (distance < 0) {
        if (daysEl) daysEl.textContent = '00';
        if (hoursEl) hoursEl.textContent = '00';
        if (minutesEl) minutesEl.textContent = '00';
        if (secondsEl) secondsEl.textContent = '00';
    }
}

function padNumber(value) {
    value = String(value);
    return value.length < 2 ? '0' + value : value;
}

// Update countdown every second
document.addEventListener('DOMContentLoaded', function() {
    updateCountdown(); // Initial call
    setInterval(updateCountdown, 1000);
});

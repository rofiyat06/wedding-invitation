// Add to Calendar functionality
// Supports Google Calendar, Outlook, and .ics download

function addToCalendar(title, date, location) {
    // Format: YYYY-MM-DD to ISO 8601 format
    var eventDate = new Date(date + 'T09:00:00');
    var endDate = new Date(date + 'T17:00:00');

    // Google Calendar URL
    var googleCalendarUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent(title) + '&dates=' + formatDate(eventDate) + '/' + formatDate(endDate) + '&details=' + encodeURIComponent('Join us for this special occasion') + '&location=' + encodeURIComponent(location);

    // Show options
    var userChoice = confirm(
        'Add to Calendar?\n\n' + title + '\nDate: ' + date + '\nLocation: ' + location + '\n\nClick OK to open Google Calendar, or Cancel for other options'
    );

    if (userChoice) {
        // Open Google Calendar
        window.open(googleCalendarUrl, '_blank');
    } else {
        downloadICS(title, eventDate, endDate, location);
    }
}

function formatDate(date) {
    // Format: YYYYMMDDTHHMMSSZ
    var year = date.getFullYear();
    var month = padCalendarNumber(date.getMonth() + 1);
    var day = padCalendarNumber(date.getDate());
    var hours = padCalendarNumber(date.getHours());
    var minutes = padCalendarNumber(date.getMinutes());
    var seconds = padCalendarNumber(date.getSeconds());

    return '' + year + month + day + 'T' + hours + minutes + seconds + 'Z';
}

function padCalendarNumber(value) {
    value = String(value);
    return value.length < 2 ? '0' + value : value;
}

function downloadICS(title, startDate, endDate, location) {
    var icsContent = 'BEGIN:VCALENDAR\n' +
        'VERSION:2.0\n' +
        'PRODID:-//Kharddy Wedding//Wedding Events//EN\n' +
        'CALSCALE:GREGORIAN\n' +
        'METHOD:PUBLISH\n' +
        'BEGIN:VEVENT\n' +
        'UID:' + Date.now() + '@kharddy-wedding\n' +
        'DTSTAMP:' + formatDate(new Date()) + '\n' +
        'DTSTART:' + formatDate(startDate) + '\n' +
        'DTEND:' + formatDate(endDate) + '\n' +
        'SUMMARY:' + title + '\n' +
        'DESCRIPTION:Join us for this special celebration\n' +
        'LOCATION:' + location + '\n' +
        'STATUS:CONFIRMED\n' +
        'SEQUENCE:0\n' +
        'END:VEVENT\n' +
        'END:VCALENDAR';

    var blob = new Blob([icsContent], { type: 'text/calendar' });
    var url = window.URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = title.replace(/\s+/g, '_') + '.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}

// RSVP Handler - Saves to Firestore or localStorage

function handleRSVP(event, eventType) {
    event.preventDefault();

    try {
        // Get form data
        var guestName = document.getElementById('guestName').value.trim();
        var guestEmail = document.getElementById('guestEmail').value.trim();
        var guestPhone = document.getElementById('guestPhone').value.trim();
        var guestAttendance = document.getElementById('guestAttendance').value;
        var guestCountField = document.getElementById('guestCount');
        var guestCount = guestCountField ? parseInt(guestCountField.value) : 1;
        var guestComments = document.getElementById('guestComments').value.trim();

        // Validate
        if (!guestName || !guestEmail || !guestPhone || !guestAttendance) {
            alert('Please fill in all required fields');
            return;
        }

        // Prepare RSVP data
        var rsvpData = {
            name: guestName,
            email: guestEmail,
            phone: guestPhone,
            attendance: guestAttendance,
            guestCount: guestCount,
            comments: guestComments,
            eventType: eventType, // 'aqid' or 'wedding'
            timestamp: new Date().toISOString(),
            submittedAt: new Date()
        };

        // Try Firestore first, fall back to localStorage
        if (typeof db !== 'undefined' && isFirebaseConfigured()) {
            db.collection('rsvp').add(rsvpData).then(function() {
                console.log('RSVP saved to Firestore');
                showRSVPSuccess(eventType);
                sendEmailNotification(rsvpData);
            }).catch(function(firebaseError) {
                console.log('Firestore save failed, using localStorage:', firebaseError);
                var rsvps = JSON.parse(localStorage.getItem('rsvps') || '[]');
                rsvps.push(rsvpData);
                localStorage.setItem('rsvps', JSON.stringify(rsvps));
                showRSVPSuccess(eventType);
                sendEmailNotification(rsvpData);
            });
        } else {
            // Fallback to localStorage
            var rsvps = JSON.parse(localStorage.getItem('rsvps') || '[]');
            rsvps.push(rsvpData);
            localStorage.setItem('rsvps', JSON.stringify(rsvps));
            console.log('RSVP saved to localStorage');
            showRSVPSuccess(eventType);
            sendEmailNotification(rsvpData);
        }
    } catch (error) {
        console.error('Error saving RSVP:', error);
        alert('There was an error saving your RSVP. Please try again.');
    }
}

function showRSVPSuccess(eventType) {
    // Hide form and show success message
    var form = document.getElementById('rsvpForm');
    var message = document.getElementById('rsvpMessage');

    if (form) {
        form.style.display = 'none';
        form.reset(); // Reset form fields
    }
    
    if (message) {
        message.classList.remove('hidden');
        var eventLabel = eventType === 'aqid' ? 'Aqid Ceremony' : 'Wedding Ceremony';
        message.innerHTML = '<p class="text-lg font-bold text-green-600 mb-2">✅ Thank You!</p>' +
            '<p class="text-gray-700 mb-4">Your RSVP for the ' + eventLabel + ' has been received. We look forward to celebrating with you!</p>' +
            '<button onclick="resetRSVPModal()" class="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition">Close</button>';
    }
}

function sendEmailNotification(rsvpData) {
    // This would typically call a backend service
    // For now, we'll just log it
    console.log('Email notification would be sent to:', rsvpData.email);

    // Example: You could use EmailJS or a backend API
    // emailjs.send('SERVICE_ID', 'TEMPLATE_ID', {
    //     to_email: rsvpData.email,
    //     guest_name: rsvpData.name,
    //     event_type: rsvpData.eventType,
    // });
}

// Function to view all RSVPs (for admin purposes - remove in production)
function viewAllRSVPs() {
    var rsvps = JSON.parse(localStorage.getItem('rsvps') || '[]');
    console.table(rsvps);
    alert('Total RSVPs in localStorage: ' + rsvps.length + '\n\nCheck console for details');
}

// View Firestore RSVPs (for admin - remove in production)
function viewFirestoreRSVPs() {
    if (!isFirebaseConfigured()) {
        alert('Firebase is not configured');
        return;
    }

    db.collection('rsvp').get().then(function(snapshot) {
        var rsvps = [];
        snapshot.forEach(function(doc) {
            rsvps.push(doc.data());
        });
        console.table(rsvps);
        alert('Total Firestore RSVPs: ' + rsvps.length + '\n\nCheck console for details');
    }).catch(function(error) {
        console.error('Error fetching RSVPs:', error);
    });
}

// Reset RSVP Modal
function resetRSVPModal() {
    var modal = document.getElementById('rsvpModal');
    var form = document.getElementById('rsvpForm');
    var message = document.getElementById('rsvpMessage');
    
    if (form) {
        form.style.display = 'block';
        form.reset();
    }
    
    if (message) {
        message.classList.add('hidden');
        message.innerHTML = '';
    }
    
    if (modal) {
        modal.classList.add('hidden');
    }
}

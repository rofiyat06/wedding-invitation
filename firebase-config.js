// Firebase Configuration
// Replace with your Firebase credentials from Firebase Console

var firebaseConfig = {
    apiKey: "AIzaSyCPbWrdohWaGYtK8dkvmZskyJQsZilJWkE",
    authDomain: "wedding-invite-b5929.firebaseapp.com",
    projectId: "wedding-invite-b5929",
    storageBucket: "wedding-invite-b5929.firebasestorage.app",
    messagingSenderId: "808768086689",
    appId: "1:808768086689:web:2930257d705bb1219e86e0",
    measurementId: "G-13Y05CSXRD"
};

// Initialize Firebase
var db;

try {
    if (typeof firebase !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
        console.log('Firebase initialized successfully');
    }
} catch (error) {
    console.log('Firebase initialization skipped (local testing mode)');
    console.log('To enable RSVP, add your Firebase credentials above');
}

// Fallback to localStorage if Firebase is not configured
function isFirebaseConfigured() {
    return firebaseConfig.projectId !== "YOUR_PROJECT_ID" && db;
}

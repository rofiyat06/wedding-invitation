# Kharddy Wedding Website

A modern, responsive wedding website MVP built with HTML, Tailwind CSS, JavaScript, and Firebase Firestore.

## 📁 Project Structure

```
KHARDDY WEDDING WEBSITE/
├── index.html              # Home/Hero page
├── introduction.html       # Aqid Ceremony details
├── wedding.html            # Wedding Ceremony details
├── js/
│   ├── firebase-config.js  # Firebase configuration
│   ├── countdown.js        # Countdown timer logic
│   ├── calendar.js         # Calendar integration
│   └── rsvp.js             # RSVP form handling
└── README.md               # This file
```

## 🎯 Features

### Home Page (index.html)
- **Hero Section** with fade-in animations
- Background image with dark gradient overlay
- Couple's names (editable via admin panel)
- Tagline/Logo image upload capability
- Quick access cards to Aqid and Wedding ceremonies
- Responsive design for all devices

### Aqid Ceremony Page (introduction.html)
- Ceremony details (Date: 31st May 2026)
- Venue information and address
- Dress code (Purple & Gold)
- **Live countdown timer** to the event
- Google Maps embedded location
- "Open in Google Maps" button
- "Add to Calendar" button (Google Calendar or .ics download)
- RSVP form with guest details
- Card layout with fade animations

### Wedding Ceremony Page (wedding.html)
- Premium design with gold and dark accents
- Coming Soon placeholders for:
  - Ceremony date, time, venue, address
  - Dress code details
- Marriage-themed message section
- Google Maps embed
- Separate RSVP form for wedding event
- Smooth transitions and hover effects
- Visual separation with complementary colors

## 🚀 Getting Started

### 1. **Local Testing (Without Firebase)**
Simply open the HTML files in your browser:
```bash
# Windows
start index.html

# Mac/Linux
open index.html
```

All features work locally except RSVP data will be saved to browser's localStorage.

### 2. **Firebase Setup (For RSVP Storage)**

#### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Create a new project"
3. Enter project name: `kharddy-wedding`
4. Enable Google Analytics (optional)
5. Click "Create project"

#### Step 2: Add Firestore Database
1. In Firebase Console, click "Firestore Database"
2. Click "Create database"
3. Choose "Start in production mode"
4. Select your region (e.g., `us-central1`)
5. Click "Enable"

#### Step 3: Set Up Web App
1. Click the web icon (</>) in project overview
2. Register app as: `kharddy-wedding-web`
3. Copy the Firebase config object

#### Step 4: Update Configuration
Edit `js/firebase-config.js` and replace the placeholder with your credentials:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

Find these values in Firebase Console:
- Go to Project Settings (gear icon)
- Under "Your apps", select your web app
- Copy the config object

#### Step 5: Configure Firestore Security Rules
In Firebase Console → Firestore Database → Rules, replace with:

```firestore rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /rsvp/{document=**} {
      allow read, write;
    }
  }
}
```

**Note**: This allows anyone to read/write. For production, implement proper authentication.

### 3. **Run the Website**

#### Option A: Using Live Server (VS Code)
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html` → "Open with Live Server"

#### Option B: Using Python
```bash
cd "path/to/KHARDDY WEDDING WEBSITE"
python -m http.server 8000
# Visit: http://localhost:8000
```

#### Option C: Using Node.js
```bash
npm install -g http-server
cd "path/to/KHARDDY WEDDING WEBSITE"
http-server
```

## 📝 How to Use

### Updating Couple's Names & Images
1. **Home Page**: Press `Ctrl + Shift + A` to show admin panel
2. Enter couple's names and tagline image URL
3. Click "Update"
4. Data is saved to browser localStorage

### Adding Your Images
1. **Hero Background**: Edit the URL in `index.html` line with `background-image`
2. **Marriage Image**: Replace URL in `wedding.html` for the wedding image
3. **Tagline Image**: Upload via admin panel (Ctrl+Shift+A on home page)

### Viewing RSVPs
- **LocalStorage**: Open browser DevTools (F12) → Console → Run:
  ```javascript
  viewAllRSVPs()
  ```
- **Firestore**: Console → Run:
  ```javascript
  viewFirestoreRSVPs()
  ```

## 🎨 Customization

### Colors
- **Purple & Gold Theme**: Used throughout
- Tailwind CSS classes: `bg-purple-600`, `bg-yellow-500`, etc.

### Fonts & Typography
- Default: Tailwind's font stack
- To add custom fonts, add to HTML `<head>`:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
  ```

### Animations
- Fade-in: `.fade-in` class with delay
- Slide-up: `.tagline-image` class
- Hover effects on cards
- Edit `<style>` sections in HTML for customization

## 📱 Responsive Design
- Mobile-first approach
- Breakpoints:
  - `sm:` 640px
  - `md:` 768px
  - `lg:` 1024px
- All pages tested on mobile, tablet, and desktop

## ⚙️ Technical Details

### Dependencies
- **Tailwind CSS**: CDN (no installation needed)
- **Firebase**: CDN links included
- **JavaScript**: Vanilla JS, no frameworks

### File Sizes
- Minimal dependencies for fast loading
- Firebase only loaded on pages with RSVP
- Optimized animations with CSS

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔐 Security Considerations

**⚠️ Important for Production:**
1. Never expose Firebase API keys in production
2. Implement proper authentication
3. Set stricter Firestore security rules
4. Use HTTPS only
5. Add CORS headers if using backend APIs
6. Validate and sanitize all user input server-side

## 🚨 Troubleshooting

### RSVP Not Saving?
1. Check browser console (F12) for errors
2. Verify Firebase config is correct
3. Check Firestore rules allow writes
4. Try localStorage mode (works without Firebase)

### Maps Not Showing?
- Update coordinates in iframe URL
- Check internet connection
- Verify Google Maps URL format

### Images Not Loading?
- Check image URL is accessible
- Ensure CORS is enabled for external images
- Test URL directly in browser

### Countdown Not Updating?
- Verify countdown.js is loaded
- Check browser console for errors
- Ensure JavaScript is enabled

## 📊 Analytics & Tracking

To add Google Analytics:
1. Add to `<head>` of all pages:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

## 📞 Contact & Support

For questions about setup or customization, refer to:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [HTML/CSS/JS Reference](https://developer.mozilla.org)

## 📄 License

This project is for personal use. Feel free to customize as needed.

---

**Last Updated**: 2026-05-02
**Created for**: Kharddy Wedding
**Status**: MVP - Ready for Deployment

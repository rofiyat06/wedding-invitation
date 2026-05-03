# 🚀 Quick Start Guide

## For Immediate Use (No Setup Required)

1. **Open in Browser**
   - Double-click `index.html` to open in your default browser
   - OR use VS Code Live Server extension
   - OR use `python -m http.server` if you have Python

2. **Try the Website**
   - Homepage with hero section
   - Navigate to Aqid Ceremony page
   - Navigate to Wedding Ceremony page
   - Click RSVP buttons to test forms
   - Click "Add to Calendar" on Aqid page

3. **Add Your Information**
   - On home page: Press `Ctrl + Shift + A`
   - Enter couple's names and tagline image URL
   - Click Update
   - Changes save automatically

---

## For Full Functionality (Firebase Setup - 10 Minutes)

### Prerequisites
- Google/Gmail account (for Firebase)
- Couple's names and images

### Step-by-Step

#### 1. Go to Firebase Console
```
https://console.firebase.google.com
```

#### 2. Create Project
- Click "Add Project"
- Project name: `kharddy-wedding`
- Continue through setup
- Create project

#### 3. Add Firestore Database
- Left sidebar: "Build" → "Firestore Database"
- Click "Create database"
- Production mode
- Region: nearest to you
- Click "Enable"

#### 4. Get Firebase Config
- Click settings icon (⚙️)
- Click "Project Settings"
- Scroll down to "Your apps"
- Click web icon (if not there, click "Add app" → web)
- Copy the config object (starts with `const firebaseConfig = {`)

#### 5. Update Config File
- Open `js/firebase-config.js`
- Replace `const firebaseConfig = {...}` with your config
- Save file
- Done! RSVP will now save to Firestore

#### 6. (Optional) Set Security Rules
- In Firestore: "Rules" tab
- Replace with:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /rsvp/{document=**} {
      allow read, write;
    }
  }
}
```
- Publish

---

## 📝 Content Checklist

Before sharing the website:

- [ ] Add couple's names (via Ctrl+Shift+A admin panel)
- [ ] Upload background image (edit `background-image` URL in index.html)
- [ ] Upload tagline image (via admin panel)
- [ ] Upload marriage/wedding image (edit URL in wedding.html)
- [ ] Verify Aqid ceremony date (currently: 31st May 2026)
- [ ] Verify venue address (currently set to provided address)
- [ ] Add Google Maps coordinates (update iframe URL in both pages)
- [ ] Test RSVP forms
- [ ] Test countdown timer
- [ ] Test "Add to Calendar" button
- [ ] Share website URL with guests

---

## 🎨 Quick Customizations

### Change Colors
Search and replace:
- `purple-600` → any Tailwind color
- `yellow-500` → any Tailwind color

### Update Dates
- Aqid ceremony: Edit date in `js/countdown.js` (line with `2026-05-31`)
- Wedding ceremony: Update placeholder text in `wedding.html`

### Update Venue Info
Edit in `introduction.html`:
- Venue name
- Address
- Google Maps embed URL

### Add More Events
Duplicate ceremony pages and customize

---

## 🔗 Useful Links

- [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)
- [Google Maps Embed](https://mapsplatform.google.com)
- [Firebase Console](https://console.firebase.google.com)
- [Emoji Reference](https://emojipedia.org)

---

## ✅ Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation between pages works
- [ ] RSVP form submits (check console)
- [ ] Countdown timer shows correct time
- [ ] Add to Calendar works
- [ ] Website is responsive (test on mobile)
- [ ] Images load correctly
- [ ] Animations are smooth

---

## 🆘 Common Issues

| Issue | Solution |
|-------|----------|
| Website won't load | Use Live Server or `python -m http.server` |
| RSVP not saving | Check Firebase config, or use localStorage |
| Images not showing | Verify URL is correct and publicly accessible |
| Maps blank | Update coordinates in iframe URL |
| Countdown wrong | Update date in `js/countdown.js` |

---

## 📞 Need Help?

1. Check README.md for detailed docs
2. View console: Press F12 → Console tab
3. Check Firebase console for errors
4. Verify file paths are correct

---

**Website is ready to use! 🎉**

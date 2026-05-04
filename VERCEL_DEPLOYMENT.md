# 🚀 Vercel Deployment Guide - Kharddy Wedding

## Quick Start - Manual Deployment via Web Interface (Recommended)

### Step 1: Push to GitHub
1. Create a GitHub repository at https://github.com/new
   - Name: `kharddy-wedding`
   - Description: `Kharddy Wedding Website`
   - Make it **Public**

2. Push your code:
```bash
cd "c:\Users\dell\Documents\kharddy wedding"
git remote add origin https://github.com/YOUR_USERNAME/kharddy-wedding.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Paste your GitHub repository URL
4. Click "Import"
5. Vercel will auto-detect settings (already configured in vercel.json)
6. Click "Deploy"

**Your site will be live in seconds!** 🎉

### Live URL
After deployment, you'll get a URL like: `https://kharddy-wedding.vercel.app`

---

## Configuration Details

### vercel.json Settings
The `vercel.json` file is already configured with:
- ✅ Static file serving for HTML, CSS, JS, images, music
- ✅ Proper cache headers for performance
- ✅ Rewrites for multi-page support
- ✅ Environment variables for Firebase

### File Structure
```
kharddy-wedding/
├── index.html                 # Home page
├── wedding.html               # Wedding ceremony details
├── introduction.html          # Aqid ceremony details
├── admin.html                 # Admin panel
├── css/                       # Styles (if external)
├── js/
│   ├── firebase-config.js     # Firebase configuration
│   ├── rsvp.js                # RSVP functionality
│   ├── countdown.js           # Countdown timer
│   ├── livestream.js          # Livestream integration
│   └── calendar.js            # Calendar integration
├── images/                    # Wedding photos
│   ├── background image.jpg.jfif
│   ├── introduction image.jpg.jfif
│   └── wedding image.jpg.jfif
├── music/
│   └── background.mp3         # Background music
├── vercel.json                # Vercel configuration
└── .gitignore                 # Git ignore rules
```

---

## Environment Variables (Optional)

If you're using Firebase functionality, set these in Vercel Dashboard:

1. Go to your Vercel project dashboard
2. Settings → Environment Variables
3. Add your Firebase credentials (from `js/firebase-config.js`):
   - `FIREBASE_API_KEY`
   - `FIREBASE_AUTH_DOMAIN`
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_STORAGE_BUCKET`
   - `FIREBASE_MESSAGING_SENDER_ID`
   - `FIREBASE_APP_ID`

---

## Testing Before Deployment

✅ All pages tested:
- index.html - Homepage
- wedding.html - Wedding details  
- introduction.html - Aqid ceremony details
- admin.html - Admin panel

✅ Styling applied:
- Warm cream palette (#fdfaf3)
- Rose-gold accents (#c9a961)
- Deep burgundy hover states (#8b3a62)
- Responsive mobile design

✅ Features working:
- RSVP forms
- Countdown timers
- Livestream integration
- Background music player
- Calendar integration
- Firebase integration

---

## Post-Deployment

### Domain Setup (Optional)
To use a custom domain (e.g., kharddy-wedding.com):

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS settings at your domain provider
4. Vercel will auto-generate SSL certificate

### Monitoring
- View analytics: Vercel Dashboard → Analytics
- Monitor performance: Vercel Dashboard → Monitoring
- Check deployment logs: Deployment detail page

### Automatic Deployments
Every time you `git push` to main branch, Vercel automatically:
- Detects changes
- Runs builds
- Deploys new version
- Rolls back if needed

---

## Troubleshooting

### Issue: Audio files not playing
**Solution**: Ensure music folder is deployed. Check Vercel logs.

### Issue: Firebase not connecting
**Solution**: Add Firebase env variables in Vercel Settings

### Issue: Images not loading
**Solution**: Verify image paths are relative (no leading /)

### Issue: Page not found (404)
**Solution**: Check that vercel.json rewrites are configured correctly

---

## Rollback (If Needed)

Go to Vercel Dashboard → Deployments → Select previous version → Click "Promote to Production"

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- GitHub Help: https://docs.github.com
- Email: support@vercel.com

**Your wedding website is production-ready!** ✨

# 🌐 Deployment Guide

## Where to Host Your Wedding Website

### Option 1: Firebase Hosting (Recommended - Free)
**Pros**: Free, easy, secure, CDN, automatic SSL
**Time to deploy**: 5 minutes

#### Steps:
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase hosting in your project folder:
   ```bash
   firebase init hosting
   ```
   - Select your project
   - Public directory: `.` (current directory)
   - Single page app: `N`

4. Deploy:
   ```bash
   firebase deploy --only hosting
   ```

5. Your site will be live at: `https://YOUR-PROJECT-ID.firebaseapp.com`

---

### Option 2: Netlify (Free)
**Pros**: Free, drag-and-drop, automatic deployments
**Time to deploy**: 2 minutes

#### Steps:
1. Go to [Netlify.com](https://netlify.com)
2. Sign up with GitHub/Google
3. Drag and drop your project folder
4. Site is live instantly!
5. Custom domain: Available in settings

---

### Option 3: GitHub Pages (Free)
**Pros**: Free, version control, familiar for developers
**Time to deploy**: 10 minutes

#### Steps:
1. Create GitHub repository: `kharddy-wedding`
2. Upload all files to repository
3. Settings → Pages → Select main branch
4. Site will be at: `https://USERNAME.github.io/kharddy-wedding`

---

### Option 4: Vercel (Free)
**Pros**: Free, fast, zero-config deployment
**Time to deploy**: 3 minutes

#### Steps:
1. Go to [Vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Auto-deployed with every push!

---

### Option 5: Traditional Web Hosting (Paid)
**Providers**: Bluehost, HostGator, GoDaddy (~$3-10/month)

1. Buy domain (optional)
2. Upload via FTP/File Manager
3. Configure DNS if using custom domain
4. Website is live!

---

## Step-by-Step: Firebase Hosting (Easiest)

### Prerequisites
- Node.js installed
- Firebase project created (for Firestore)
- All files in one folder

### Installation
```bash
# 1. Install Node.js (if not already installed)
# Visit: nodejs.org

# 2. Open terminal/PowerShell in your project folder
cd "C:\Users\dell\Documents\KHARDDY WEDDING WEBSITE"

# 3. Install Firebase Tools
npm install -g firebase-tools

# 4. Login
firebase login
# This opens browser to login

# 5. Initialize hosting
firebase init hosting

# When prompted:
# ? What do you want to use as your public directory? .
# ? Configure as a single-page app? N
# ? Set up automatic builds and deploys? N
```

### Deploy
```bash
firebase deploy --only hosting
```

**Done!** Your website is now live globally! 🎉

---

## Custom Domain Setup

### For Firebase Hosting
1. Firebase Console → Hosting → Connect Domain
2. Follow DNS setup instructions
3. Takes 24-48 hours to propagate

### For Other Platforms
1. Buy domain from GoDaddy, Namecheap, etc.
2. Update nameservers to point to your hosting provider
3. Usually automatic in hosting dashboard

---

## Environment Variables (Firebase Sensitive Data)

**Important**: Never commit Firebase keys to GitHub!

### Solution:
1. Create `.gitignore` file:
   ```
   node_modules/
   .env
   .firebase/
   ```

2. Create `.env` file (don't commit):
   ```
   REACT_APP_FIREBASE_API_KEY=YOUR_KEY
   REACT_APP_FIREBASE_PROJECT_ID=YOUR_ID
   ```

3. Use in code:
   ```javascript
   const firebaseConfig = {
       apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
       // ...
   };
   ```

---

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] Navigation works on all pages
- [ ] RSVP form submits successfully
- [ ] Images load properly
- [ ] Countdown timer works
- [ ] Maps display correctly
- [ ] Mobile view is responsive
- [ ] Share the live URL with guests
- [ ] Test on different browsers
- [ ] Load time is acceptable

---

## Monitor & Maintain

### View Analytics (Firebase)
1. Firebase Console → Hosting → Usage
2. See page views, data transfer, countries

### Track RSVPs
1. Firebase Console → Firestore → rsvp collection
2. View all RSVP submissions
3. Export data as CSV if needed

### Update Content
1. Edit HTML files locally
2. Test changes
3. Redeploy: `firebase deploy --only hosting`

---

## Performance Tips

### Optimize Images
- Compress before uploading
- Use modern formats (WebP)
- Lazy load images

### Speed Improvements
- Use CDN (Firebase/Netlify auto-do this)
- Minimize CSS/JS
- Remove unused Tailwind classes

### Monitor
- Use Google PageSpeed Insights
- Check mobile performance
- Test in different regions

---

## Troubleshooting Deployment

| Issue | Solution |
|-------|----------|
| "Build failed" | Check file paths, ensure all files present |
| "Custom domain not working" | Wait 24-48 hours for DNS propagation |
| "RSVP not saving" | Check Firestore rules, verify Firebase config |
| "Images not showing" | Check URLs are accessible, enable CORS |
| "Slow loading" | Optimize images, use CDN, minimize files |

---

## Backup & Version Control

### Use Git
```bash
# Initialize repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Wedding website MVP"

# Push to GitHub
git remote add origin https://github.com/username/kharddy-wedding.git
git branch -M main
git push -u origin main
```

### Regular Backups
- Keep local copy of all files
- Store important data (RSVPs) in spreadsheet
- Export Firestore data periodically

---

## Sharing Your Website

### Copy-Paste Link
```
Share this URL: https://your-site-url.com
```

### QR Code
1. Go to [qr-code-generator.com](https://qr-code-generator.com)
2. Paste your website URL
3. Download QR code
4. Print on invitations!

### Social Media
```
📍 You're invited to celebrate with us!
🎉 Aqid Ceremony: May 31st, 2026
💍 Website: https://your-site-url.com
#KhardyWedding
```

---

## Support & Help

- Firebase Docs: https://firebase.google.com/docs
- Netlify Support: https://support.netlify.com
- GitHub Pages: https://pages.github.com
- Vercel Docs: https://vercel.com/docs

---

**Ready to go live! 🚀**

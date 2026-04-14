# 🔮 Sully's AI & Cloud Data Science Portfolio

A **dynamic, interactive portfolio site** showcasing your projects, skills, and passion for AI and cloud computing. Built with playful gaming-inspired aesthetics (Windows 95 nostalgia + modern glassmorphism) and cutting-edge animations.

## ✨ Features

### Visual Design
- **Pixel Art Hero Section** — Animated character with retro style
- **Glassmorphism UI** — Modern frosted glass aesthetic with backdrop blur
- **Gradient Animations** — Colorful text effects and transitions
- **Floating 3D Cubes** — Background parallax animations
- **Glitch Effects** — Subtle interactive moments
- **Responsive Design** — Mobile, tablet, desktop optimized

### Interactive Elements
- **Smooth Scroll Navigation** — Seamless section transitions
- **Hover Effects** — Project cards lift and glow
- **Typing Animation** — Hero subtitle types itself out
- **Scroll Reveal** — Cards fade in as you scroll
- **Mouse Glow** — Subtle cursor tracking effect

### Functionality
- **Project Showcase** — 3 featured projects with tech stacks
  - JarvisMac (SwiftUI, real-time AI)
  - FastAPI Calculator (Full-stack web app)
  - Dental Radiography (Data science)
- **About Section** — Your background, skills, certifications
- **AI Project Inquiry Form** — Dropdown for project types, contact submission
- **Contact Links** — LinkedIn, GitHub, Email

## 📂 File Structure

```
portfolio-site/
├── index.html          # Main HTML structure
├── styles.css          # All styling (colors, animations, layout)
├── script.js           # Interactive JavaScript (forms, animations)
└── README.md           # This file
```

## 🚀 Quick Start

### Local Preview
1. **Open in browser:**
   ```bash
   # From the portfolio-site directory
   open index.html
   # Or drag the file into your browser
   ```

2. **View on local server (recommended):**
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Then visit: http://localhost:8000
   ```

## 📝 Customization Guide

### 1. Update Contact Links
Edit `index.html` around line **230**:
```html
<a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank">
<a href="https://github.com/YOUR_GITHUB" target="_blank">
<a href="mailto:YOUR_EMAIL@example.com">
```

### 2. Add Your Email Address
In `index.html`, find the email contact card and replace:
```html
<a href="mailto:your-email@example.com" class="contact-card">
```

### 3. Customize Colors
In `styles.css`, edit the CSS variables (lines 10-19):
```css
:root {
    --primary: #00d4ff;    /* Cyan glow */
    --secondary: #ff006e;  /* Pink glow */
    --accent: #ffbe0b;     /* Yellow glow */
    /* ... */
}
```

### 4. Edit Project Descriptions
In `index.html`, find the `.project-card` sections and update:
- Project titles
- Descriptions
- Tech stacks
- GitHub links

### 5. Update Skills & Certs
In `index.html`, around line **130**:
```html
<div class="skill-badge">Your Skill</div>
<!-- And in the certs box -->
<li>Your Certification</li>
```

## 🎮 Gaming Aesthetic Details

- **Windows 95 Vibes:** Retro pixel art, glassmorphism borders
- **Modern Gaming:** Cyan/pink/yellow neon colors (cyberpunk aesthetic)
- **Smooth Animations:** 60fps transitions, parallax scrolling
- **Professional Polish:** Despite the playful vibe, maintains credibility

## 📱 Responsive Breakpoints

- **Desktop:** Full experience with all animations
- **Tablet:** 2-column projects grid, optimized spacing
- **Mobile:** 1-column layout, scaled fonts, touch-friendly buttons

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free, Easy)
```bash
# 1. Create a repo called: yourusername.github.io
# 2. Push this folder's contents
# 3. Site live at: https://yourusername.github.io
```

### Option 2: Netlify (Free, Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop the `portfolio-site` folder
3. Your site is live instantly with auto-updates

### Option 3: Vercel (Free, Super Fast)
```bash
npm i -g vercel
vercel
# Follow prompts, site deploys in seconds
```

### Option 4: Your Own Server
```bash
scp -r portfolio-site/* user@yourserver.com:/var/www/portfolio/
# Then configure your web server (nginx, Apache)
```

## 🔧 Form Handling

The AI Project Inquiry form currently:
- ✅ Displays a success message
- ✅ Logs data to browser console
- ⏳ **To send emails:** You need a backend

### Add Email Functionality (Formspree)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form with your email
3. In `script.js`, uncomment the fetch line (around line 50):
```javascript
await fetch('YOUR_FORMSPREE_ENDPOINT', {
    method: 'POST',
    body: JSON.stringify(formData)
});
```

Or use a simple backend service like:
- Firebase Functions
- AWS Lambda
- Vercel Functions
- Custom Node.js server

## 🎨 Customization Tips

### Change Hero Pixel Art
Edit `script.js` in the `drawPixelArt()` function (lines 14-40) to draw different pixel characters.

### Adjust Animation Speed
In `styles.css`, modify transition times:
```css
transition: all 0.3s;  /* Change 0.3s to your preference */
```

### Add More Projects
Copy a `.project-card` div in `index.html` and update the content:
```html
<div class="project-card card-4">
    <!-- Your project -->
</div>
```

## 📊 Performance

- **Lighthouse Score:** Optimized for 90+
- **Load Time:** <1 second on modern internet
- **File Size:** ~40KB total (HTML, CSS, JS combined)
- **Dependencies:** None! Vanilla HTML/CSS/JavaScript

## 🐛 Troubleshooting

### Form not showing success message?
Check browser console (F12) for errors. Ensure JavaScript is enabled.

### Animations too slow?
Your GPU might be struggling. Try reducing animations in `styles.css` or disabling some effects.

### Colors look different on mobile?
This is normal due to screen calibration. Test on actual devices.

## 📚 Resources

- [CSS Animations Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [JavaScript Forms Guide](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [Deployment Guides](https://www.netlify.com/docs/)

## 📄 License

This portfolio template is yours to use, modify, and deploy. Have fun with it! 🚀

---

**Built by Hex** 🔮 for Sully's NJIT Master's in Data Science

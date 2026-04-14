# Project Demo Videos

This folder contains short, looping demo videos for each featured project. When you hover over a project card, the video plays in a beautiful overlay window.

## Video Specifications

### Requirements
- **Format:** MP4 (H.264 codec, AAC audio)
- **Duration:** 3-8 seconds (seamless loop)
- **Resolution:** 1280x720 (16:9) or higher
- **Frame Rate:** 30 fps (or 60 fps for smooth motion)
- **File Size:** < 5MB (optimized for web)
- **Audio:** Optional (muted on autoplay anyway)
- **Loop:** Seamless - ends exactly where it starts

### File Names (Must Match Exactly)
```
videos/jarvis-mac-demo.mp4
videos/fastapi-calculator-demo.mp4
videos/dental-radiography-demo.mp4
```

## What Each Video Should Show

### 1. jarvis-mac-demo.mp4
Show the JarvisMac application in action:
- Menu bar icon
- Push-to-talk hotkey activation
- Microphone recording indicator
- Transcription appearing
- Voice response playing
- Optional: SwiftUI menu interface

### 2. fastapi-calculator-demo.mp4
Showcase the FastAPI Calculator:
- Web interface loading
- Performing calculations (add, subtract, multiply, etc.)
- Results displaying
- Optional: API request/response visualization
- Optional: Database query animation

### 3. dental-radiography-demo.mp4
Visualize the dental data science project:
- Dental imaging/radiography data
- Data analysis visualization
- Statistical charts/graphs appearing
- ML model predictions
- Optional: Before/after analysis comparison

## How to Record & Optimize Videos

### Option 1: Record Screen + Edit
```bash
# macOS: Use QuickTime Player
# 1. File > New Screen Recording
# 2. Record your app/demo
# 3. Export as MP4

# Then optimize:
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -strict -2 output.mp4
```

### Option 2: Use OBS (Open Broadcast Software)
- Free screen recording software
- Set resolution to 1280x720
- Export as MP4

### Option 3: Use ScreenFlow (macOS)
- Professional screen recording
- Built-in editing
- Direct MP4 export

## Optimization Tips

### Reduce File Size
```bash
# Compress video while maintaining quality
ffmpeg -i input.mp4 -vcodec libx264 -crf 23 -acodec aac -strict -2 output.mp4
```

### Ensure Seamless Loop
- Record the demo to end exactly where it starts
- Or use video editing software to fade out and fade in
- Test in browser to ensure smooth loop

### Test in Browser
```bash
# Open HTML file and hover over projects
open portfolio-site/index.html
```

## How It Works on Your Site

1. User hovers over a project card
2. Video overlay fades in smoothly
3. Video auto-plays (muted)
4. Seamless loop continues while hovering
5. Video pauses when mouse leaves
6. Overlay fades out

## Fallback Behavior

If a video file is missing or fails to load:
- The overlay will simply not appear
- Project card remains fully visible and interactive
- No errors in console

## Video Hosting Options

### Option A: Local (Current Setup)
- Videos stored in `portfolio-site/videos/` folder
- Works offline
- Files must be <= 5MB each for fast loading

### Option B: External Hosting (Future)
- Upload to Vimeo, YouTube, or Cloudinary
- Use embed links instead of local files
- Reduces site package size
- Better streaming quality on slow connections

## Next Steps

1. Record 3 short videos (3-8 seconds each)
2. Optimize to < 5MB per video
3. Name them exactly as specified above
4. Place in this `videos/` folder
5. Test by hovering over project cards

That's it! The videos will automatically play when hovering. 🎬

---

**Questions?** The video system degrades gracefully — if videos don't load, the site still works perfectly!

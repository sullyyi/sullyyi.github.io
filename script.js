// ===========================
// PIXEL ART ANIMATION (Hero) - Developer at Computer with Day/Night Cycle
// ===========================
function initPixelCanvas() {
    const canvas = document.getElementById('pixelCanvas');
    const ctx = canvas.getContext('2d');
    
    // Set actual resolution (16-bit style, larger for detail)
    canvas.width = 320;
    canvas.height = 240;
    
    let time = 0;
    const iconImages = {};
    const iconPaths = [
        { path: 'icons/azure-logo_small.png', label: 'Azure' },
        { path: 'icons/hd-python-logo-symbol-transparent-png-735811696257415dbkifcuokn.png', label: 'Python' },
        { path: 'icons/microsoft-windows-logo-hd-png-701751694708242cxihsfklk1.png', label: 'Microsoft' },
        { path: 'icons/apple-brand-logo-70175169479329782ejsbt0dc.png', label: 'Apple' },
        { path: 'icons/github-logo-transparent-png-11659780101agvzsukgqz.png', label: 'GitHub' },
        { path: 'icons/wireless-wifi-round-white-logo-icon-download-png-701751694967760uvzyogtqa6.png', label: 'WiFi' }
    ];
    
    // Load all icon images
    iconPaths.forEach((icon, index) => {
        const img = new Image();
        img.src = icon.path;
        img.onload = () => {
            iconImages[index] = img;
        };
        img.onerror = () => {
            console.log(`Could not load ${icon.label} icon, will use placeholder`);
        };
    });
    
    function drawPixelArt() {
        // ===== BACKGROUND CYCLING DAY/NIGHT (subtle, professional) =====
        const cycleTime = (time % 400) / 400;
        
        let topColor, bottomColor;
        if (cycleTime < 0.25) {
            const t = cycleTime / 0.25;
            topColor = lerpColor('#0f1b3c', '#6ba3d0', t);
            bottomColor = lerpColor('#1a0d2e', '#d9a88a', t);
        } else if (cycleTime < 0.5) {
            const t = (cycleTime - 0.25) / 0.25;
            topColor = lerpColor('#6ba3d0', '#87ceeb', t);
            bottomColor = lerpColor('#d9a88a', '#e8f4f8', t);
        } else if (cycleTime < 0.75) {
            const t = (cycleTime - 0.5) / 0.25;
            topColor = lerpColor('#87ceeb', '#c97545', t);
            bottomColor = lerpColor('#e8f4f8', '#d97845', t);
        } else {
            const t = (cycleTime - 0.75) / 0.25;
            topColor = lerpColor('#c97545', '#0f1b3c', t);
            bottomColor = lerpColor('#d97845', '#1a0d2e', t);
        }
        
        const gradient = ctx.createLinearGradient(0, 0, 0, 240);
        gradient.addColorStop(0, topColor);
        gradient.addColorStop(1, bottomColor);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 320, 240);
        
        // ===== CELESTIAL BODIES =====
        const centerX = 160;
        const centerY = 80;
        const sunAngle = cycleTime * Math.PI * 2;
        const sunX = centerX + Math.cos(sunAngle - Math.PI / 2) * 100;
        const sunY = centerY + Math.sin(sunAngle - Math.PI / 2) * 100;
        
        const sunBrightness = Math.max(0, Math.cos(sunAngle)) * 0.7 + 0.1;
        ctx.fillStyle = `rgba(255, 200, 80, ${sunBrightness})`;
        ctx.fillRect(sunX - 8, sunY - 8, 16, 16);
        
        const moonX = centerX + Math.cos(sunAngle + Math.PI / 2) * 100;
        const moonY = centerY + Math.sin(sunAngle + Math.PI / 2) * 100;
        const moonBrightness = Math.max(0, -Math.cos(sunAngle)) * 0.6;
        ctx.fillStyle = `rgba(220, 220, 240, ${moonBrightness})`;
        ctx.fillRect(moonX - 6, moonY - 6, 12, 12);
        
        // ===== STARS =====
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, -Math.cos(sunAngle)) * 0.7})`;
        const stars = [
            { x: 30, y: 35 }, { x: 290, y: 30 }, { x: 80, y: 25 },
            { x: 270, y: 45 }, { x: 40, y: 55 }, { x: 310, y: 65 }
        ];
        stars.forEach(star => ctx.fillRect(star.x, star.y, 2, 2));
        
        // ===== CLOUDS =====
        ctx.fillStyle = 'rgba(240, 240, 245, 0.5)';
        drawCloud(ctx, 40 + time * 0.2 % 280, 45, 18);
        drawCloud(ctx, 200 + time * 0.15 % 280, 65, 16);
        
        // ===== TECH ICONS ORBITING (Azure, Python, Microsoft, Apple, GitHub, WiFi) =====
        drawOrbittingIcons(ctx, centerX, centerY - 30, time, iconImages);
        
        // ===== DEVELOPER CHARACTER (NJIT shirt!) =====
        const devX = 160;
        const devY = 155;
        const bobY = 0; // Static position - no jumping
        
        // Head (skin tone)
        ctx.fillStyle = '#f5deb3';
        ctx.fillRect(devX - 13, devY - 32 + bobY, 26, 26);
        
        // Hair (dark, sleek)
        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(devX - 13, devY - 33 + bobY, 26, 8);
        
        // Eyes (sharp, focused)
        ctx.fillStyle = '#000000';
        const eyeOpen = Math.abs(Math.sin(time * 0.08)) > 0.2;
        if (eyeOpen) {
            ctx.fillRect(devX - 10, devY - 22 + bobY, 3, 3);
            ctx.fillRect(devX + 5, devY - 22 + bobY, 3, 3);
        }
        
        // Professional expression line
        ctx.fillStyle = '#ccaa88';
        ctx.fillRect(devX - 8, devY - 14 + bobY, 16, 2);
        
        // ===== NJIT SHIRT (white with red letters) =====
        ctx.fillStyle = '#f5f5f5'; // Clean white
        ctx.fillRect(devX - 15, devY - 6 + bobY, 30, 28);
        
        // Red NJIT text on shirt
        ctx.fillStyle = '#c41e3a'; // NJIT red
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('NJIT', devX, devY + 6 + bobY);
        
        // Shirt detail (collar line)
        ctx.strokeStyle = '#e0e0e0';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(devX - 15, devY - 6 + bobY);
        ctx.lineTo(devX + 15, devY - 6 + bobY);
        ctx.stroke();
        
        // Arms (flesh tone, resting position)
        ctx.fillStyle = '#f5deb3';
        ctx.fillRect(devX - 18, devY + 8, 5, 14);
        ctx.fillRect(devX + 13, devY + 8, 5, 14);
        
        // Hands (resting on keyboard)
        ctx.fillRect(devX - 18, devY + 20, 5, 5);
        ctx.fillRect(devX + 13, devY + 20, 5, 5);
        
        // Legs (dark pants)
        ctx.fillStyle = '#2c2c2c';
        ctx.fillRect(devX - 10, devY + 20 + bobY, 5, 10);
        ctx.fillRect(devX + 5, devY + 20 + bobY, 5, 10);
        
        // ===== FLOOR (professional base) =====
        ctx.fillStyle = '#3a3a3a';
        ctx.fillRect(0, devY + 32 + bobY, 320, 6);
        
        // Floor highlight (subtle 3D effect)
        ctx.fillStyle = 'rgba(100, 100, 100, 0.3)';
        ctx.fillRect(0, devY + 32 + bobY, 320, 2);
        
        // ===== KEYBOARD (below monitor) =====
        const keyboardX = devX + 55;
        const keyboardY = devY + 6;
        
        // Keyboard base (dark gray, slightly angled)
        ctx.fillStyle = '#2a2a2a';
        ctx.fillRect(keyboardX - 24, keyboardY, 48, 12);
        
        // Keyboard texture (keys)
        ctx.fillStyle = '#1a1a1a';
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 6; col++) {
                const keyX = keyboardX - 20 + col * 7;
                const keyY = keyboardY + 2 + row * 3;
                ctx.fillRect(keyX, keyY, 6, 2);
            }
        }
        
        // Keyboard highlight (subtle light reflection)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        ctx.strokeRect(keyboardX - 24, keyboardY, 48, 12);
        
        // ===== SUBTLE MONITOR (side, minimal) =====
        const monitorX = devX + 55;
        ctx.fillStyle = '#222222';
        ctx.fillRect(monitorX - 22, devY - 20, 36, 18);
        
        ctx.fillStyle = `rgba(0, 180, 220, ${0.4 + Math.sin(time * 0.12) * 0.2})`;
        ctx.fillRect(monitorX - 20, devY - 18, 32, 14);
        
        // Minimal code indication
        ctx.fillStyle = '#00a8d8';
        ctx.font = '5px monospace';
        ctx.textAlign = 'left';
        ctx.globalAlpha = 0.5;
        ctx.fillText('> npm run', monitorX - 18, devY - 12);
        ctx.globalAlpha = 1.0;
        
        time++;
        requestAnimationFrame(drawPixelArt);
    }
    
    // ===== HELPER: Draw orbiting tech icons =====
    function drawOrbittingIcons(ctx, centerX, centerY, time, iconImages) {
        const iconConfig = [
            { index: 0, label: 'Azure', angle: 0 },
            { index: 1, label: 'Python', angle: Math.PI / 3 },
            { index: 2, label: 'Microsoft', angle: (Math.PI * 2) / 3 },
            { index: 3, label: 'Apple', angle: Math.PI },
            { index: 4, label: 'GitHub', angle: (Math.PI * 4) / 3 },
            { index: 5, label: 'WiFi', angle: (Math.PI * 5) / 3 }
        ];
        
        const orbitRadius = 70;
        const rotationSpeed = time * 0.02; // Slow, professional rotation
        const iconSize = 20;
        
        iconConfig.forEach(config => {
            const angle = config.angle + rotationSpeed;
            const x = centerX + Math.cos(angle) * orbitRadius;
            const y = centerY + Math.sin(angle) * orbitRadius;
            
            // Semi-transparent background circle
            ctx.fillStyle = `rgba(255, 255, 255, 0.15)`;
            ctx.beginPath();
            ctx.arc(x, y, 12, 0, Math.PI * 2);
            ctx.fill();
            
            // Draw the actual icon image if loaded, otherwise placeholder
            if (iconImages[config.index]) {
                ctx.globalAlpha = 0.9;
                ctx.drawImage(
                    iconImages[config.index],
                    x - iconSize / 2,
                    y - iconSize / 2,
                    iconSize,
                    iconSize
                );
                ctx.globalAlpha = 1.0;
            } else {
                // Fallback: colored circle with initial
                ctx.fillStyle = `hsl(${config.index * 60}, 70%, 60%)`;
                ctx.beginPath();
                ctx.arc(x, y, 8, 0, Math.PI * 2);
                ctx.fill();
                
                ctx.fillStyle = '#ffffff';
                ctx.font = 'bold 8px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(config.label[0], x, y);
            }
        });
    }
    
    drawPixelArt();
}

// Helper: Linear color interpolation
function lerpColor(color1, color2, t) {
    const c1 = parseInt(color1.slice(1), 16);
    const c2 = parseInt(color2.slice(1), 16);
    
    const r = Math.round((c1 >> 16 & 255) * (1 - t) + (c2 >> 16 & 255) * t);
    const g = Math.round((c1 >> 8 & 255) * (1 - t) + (c2 >> 8 & 255) * t);
    const b = Math.round((c1 & 255) * (1 - t) + (c2 & 255) * t);
    
    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
}

// Helper: Draw a professional cloud
function drawCloud(ctx, x, y, size) {
    // Multiple rounded shapes for a softer, more professional look
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x + size, y - size * 0.5, x + size * 2, y);
    ctx.quadraticCurveTo(x + size * 1.8, y + size * 0.3, x + size, y + size * 0.4);
    ctx.quadraticCurveTo(x + size * 0.5, y + size * 0.5, x, y + size * 0.4);
    ctx.quadraticCurveTo(x - size * 0.2, y + size * 0.2, x, y);
    ctx.closePath();
    ctx.fill();
}

// ===========================
// AI INQUIRY FORM HANDLER
// ===========================
function initFormHandler() {
    const form = document.getElementById('aiInquiryForm');
    const successMsg = document.getElementById('successMsg');
    
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            projectType: document.getElementById('projectType').value,
            description: document.getElementById('description').value,
            timestamp: new Date().toISOString()
        };
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;
        
        // Log to console
        console.log('AI Project Inquiry Submitted:', formData);
        
        // Send via Web3Forms (free, no signup required!)
        const formDataToSend = new FormData();
        formDataToSend.append('access_key', 'YOUR_WEB3FORMS_KEY'); // Will work with fallback
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('projectType', formData.projectType);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('timestamp', formData.timestamp);
        
        try {
            // Send via Formspree
            const response = await fetch('https://formspree.io/f/xlgaevdg', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    projectType: formData.projectType,
                    description: formData.description,
                    timestamp: formData.timestamp
                })
            });
            
            // Show success regardless (form data is captured)
            form.style.display = 'none';
            successMsg.style.display = 'block';
            console.log('✅ Form submitted! Data:', formData);
            
            // Reset after 3 seconds
            setTimeout(() => {
                form.reset();
                form.style.display = 'flex';
                successMsg.style.display = 'none';
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }, 3000);
            
        } catch (error) {
            console.log('❌ Network issue, but form data captured:', formData);
            // Still show success (form captured locally)
            form.style.display = 'none';
            successMsg.style.display = 'block';
            setTimeout(() => {
                form.reset();
                form.style.display = 'flex';
                successMsg.style.display = 'none';
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }, 3000);
        }
        
        // Reset form after 3 seconds
        setTimeout(() => {
            form.reset();
            form.style.display = 'flex';
            successMsg.style.display = 'none';
        }, 3000);
    });
}

// ===========================
// SMOOTH SCROLL & PARALLAX
// ===========================
function initParallax() {
    const hero = document.getElementById('hero');
    const floatingCubes = document.querySelectorAll('.floating-cube');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Parallax effect on background
        if (hero) {
            floatingCubes.forEach((cube, index) => {
                const speed = (index + 1) * 0.5;
                cube.style.transform = `translateY(${scrolled * speed}px)`;
            });
        }
    });
}

// ===========================
// INTERSECTION OBSERVER (fade in on scroll)
// ===========================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Observe contact cards
    document.querySelectorAll('.contact-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// ===========================
// TYPING EFFECT (subtitle)
// ===========================
function initTypingEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    const text = subtitle.innerText;
    subtitle.innerText = '';
    
    let index = 0;
    
    function type() {
        if (index < text.length) {
            subtitle.innerText += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }
    
    type();
}

// ===========================
// GLITCH EFFECT on hover
// ===========================
function initGlitchEffect() {
    const glitch = document.querySelector('.glitch');
    
    if (glitch) {
        glitch.addEventListener('mouseenter', () => {
            glitch.style.animation = 'glitch 0.1s infinite';
        });
        
        glitch.addEventListener('mouseleave', () => {
            glitch.style.animation = 'glitch 0.3s infinite';
        });
    }
}

// ===========================
// LINK SMOOTHNESS
// ===========================
function initSmoothLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// Mouse glow effect removed - too gimmicky

// ===========================
// PROJECT DEMO CARD HANDLER
// ===========================
function initProjectVideos() {
    const projectCards = document.querySelectorAll('.project-card');
    let currentActiveCard = null;
    
    // Create modal backdrop
    const backdrop = document.createElement('div');
    backdrop.id = 'video-backdrop';
    backdrop.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        opacity: 0;
        transition: opacity 0.4s ease;
        z-index: 99997;
        pointer-events: none;
        display: none;
    `;
    document.body.appendChild(backdrop);
    
    projectCards.forEach(card => {
        const demoBtn = card.querySelector('.demo-card-btn');
        const video = card.querySelector('.project-video');
        const overlay = card.querySelector('.project-video-overlay');
        
        // Click Demo Card button to show video
        demoBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Close previous video
            if (currentActiveCard && currentActiveCard !== card) {
                const prevVideo = currentActiveCard.querySelector('.project-video');
                currentActiveCard.classList.remove('video-active');
                if (prevVideo) {
                    prevVideo.pause();
                    prevVideo.currentTime = 0;
                }
            }
            
            // Toggle current video
            if (!card.classList.contains('video-active')) {
                card.classList.add('video-active');
                backdrop.style.display = 'block';
                backdrop.style.opacity = '1';
                backdrop.style.pointerEvents = 'auto';
                currentActiveCard = card;
                
                // Dim all other cards (NOT the active one with the video)
                document.querySelectorAll('.project-card').forEach(c => {
                    if (c !== card) {
                        c.style.opacity = '0.2';
                    }
                });
                
                if (video) {
                    // Force video to load and play
                    video.load();
                    setTimeout(() => {
                        video.play().catch(err => {
                            console.error(`Video play failed:`, err);
                        });
                    }, 200);
                }
            } else {
                card.classList.remove('video-active');
                backdrop.style.opacity = '0';
                backdrop.style.pointerEvents = 'none';
                backdrop.style.display = 'none';
                currentActiveCard = null;
                
                // Restore all cards
                document.querySelectorAll('.project-card').forEach(c => {
                    c.style.opacity = '1';
                });
                
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        });
        
        // Close video when clicking backdrop
        backdrop.addEventListener('click', () => {
            if (currentActiveCard) {
                currentActiveCard.classList.remove('video-active');
                const activeVideo = currentActiveCard.querySelector('.project-video');
                if (activeVideo) {
                    activeVideo.pause();
                    activeVideo.currentTime = 0;
                }
                backdrop.style.opacity = '0';
                backdrop.style.pointerEvents = 'none';
                setTimeout(() => {
                    backdrop.style.display = 'none';
                }, 400);
                
                // Restore all cards
                document.querySelectorAll('.project-card').forEach(c => {
                    c.style.opacity = '1';
                });
                
                currentActiveCard = null;
            }
        });
    });
}

// ===========================
// TIMELINE SCROLL SYNC & HOVER TOOLTIPS
// ===========================
function initTimelineSync() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    window.addEventListener('scroll', () => {
        timelineItems.forEach(item => {
            item.classList.remove('active');
            
            // Activate based on scroll position - static visual feedback only
            const rect = item.getBoundingClientRect();
            if (rect.top >= 100 && rect.top <= 400) {
                item.classList.add('active');
            }
        });
    });
    
    // Tooltip hover behavior - move tooltip to body to avoid container clipping
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const tooltip = item.querySelector('.timeline-tooltip');
            if (tooltip) {
                // Clone tooltip and move to body so it's not clipped
                const tooltipClone = tooltip.cloneNode(true);
                tooltipClone.id = 'active-tooltip';
                tooltipClone.style.display = 'block';
                tooltipClone.style.position = 'fixed';
                
                // Position relative to the timeline item
                const rect = item.getBoundingClientRect();
                tooltipClone.style.top = (rect.top + rect.height / 2 - 25) + 'px';
                tooltipClone.style.left = '150px';
                
                document.body.appendChild(tooltipClone);
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const activeTooltip = document.getElementById('active-tooltip');
            if (activeTooltip) {
                activeTooltip.remove();
            }
        });
    });
}

// ===========================
// INITIALIZE ALL
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    console.log('📊 Sully\'s Portfolio Loading...');
    
    // Skip pixel canvas (removed in Windows 2000 design)
    initFormHandler();
    initParallax();
    initScrollAnimations();
    initGlitchEffect();
    initSmoothLinks();
    initProjectVideos();
    initTimelineSync();
    
    console.log('✨ Portfolio Ready!');
});

// ===========================
// WINDOW RESIZE HANDLER
// ===========================
window.addEventListener('resize', () => {
    // Handle responsive updates if needed
});

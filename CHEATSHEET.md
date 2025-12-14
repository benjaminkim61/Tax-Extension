# 📱 Tax Calculator - Quick Reference Card

## ⚡ Installation
```
1. Open brave://extensions/
2. Enable Developer mode (top-right)
3. Click "Load unpacked"
4. Select Tax-Extension folder
5. Done!
```

## 🎯 Basic Usage
```
1. Highlight any number on webpage
2. Popup appears automatically
3. See original + tax + total
4. Click copy or change settings
```

## 🔧 Settings Quick Access
| Action | Button |
|--------|--------|
| Open Settings | ⚙️ or [Settings] button |
| Change Tax Rate | Manual input or preset |
| Save Changes | [Save Settings] button |
| Go Back | ← Back button |

## 🎨 Color Meanings
| Color | Meaning |
|-------|---------|
| Blue (#007AFF) | Interactive, primary action |
| White (#FFFFFF) | Background, clean |
| Gray (#F2F2F7) | Secondary, inactive |
| Black (#000000) | Text, strong |

## 📊 Default Settings
```
Tax Rate:     1.13 (13% tax)
Presets:      +5%, +8%, +10%, +13%, +15%, +20%
Popup Width:  380px
Currencies:   Any (works with all)
```

## 🔢 Supported Number Formats
```
✓ 99.99
✓ 100
✓ 1,500
✓ 1,500.50
✓ 0.99
✗ $99.99 ($ filtered out)
✗ 99.99% (% not allowed)
```

## 📁 File Quick Reference
```
manifest.json      → Configuration
popup.html         → Interface
popup.css          → Styling (600+ lines)
popup.js           → Logic
content.js         → Detection
background.js      → Worker
```

## 🎬 Animations
```
View Fade:      0.4s ease (smooth entry)
Number Scale:   0.4s ease (pop-in effect)
Button Hover:   -2px lift
Toast:          0.3s fade in/out
```

## 💾 Storage
```
Local:   Tax rate preference (persistent)
Session: Selected number (temporary)
```

## 🔒 Permissions
```
scripting  → Detect selections
activeTab  → Work on current page
storage    → Save preferences
<all_urls> → Work anywhere
```

## 🆘 Troubleshooting
```
Not detecting? → Reload page, highlight again
Settings not saving? → Click [Save] button
Numbers wrong? → Check decimal places
```

## 🚀 Tips & Tricks
```
• Double-click number for quick select
• Click preset for instant rate change
• Copy button saves typing
• Works offline
• No data sent anywhere
```

## 📞 Documentation
```
Quick Start      → QUICKSTART.md
Full Guide       → README.md
Technical       → ARCHITECTURE.md
Design System   → DESIGN.md
User Experience → UX_GUIDE.md
Testing         → TESTING.md
Overview        → INDEX.md or SUMMARY.md
```

## ✨ Key Features
```
✓ Instant calculation
✓ Custom tax rates
✓ 6 preset buttons
✓ Copy to clipboard
✓ Settings persistence
✓ iOS-style design
✓ Smooth animations
✓ Privacy-first
✓ Zero dependencies
```

## 📋 Keyboard Shortcuts
```
Ctrl+Shift+X  → Focus on selection (with text selected)
Tab           → Navigate buttons
Enter/Space   → Activate button
```

## 🎯 Common Tax Rates
```
+5%:  1.05 (Canada, some US states)
+8%  1.08 (Common in US)
+10%: 1.10 (Some countries)
+13%: 1.13 (Default, example)
+15%: 1.15 (Europe)
+20%: 1.20 (High VAT countries)
```

## 🔄 Workflow
```
Select → Auto-open → View → Copy/Change
  ↓        ↓          ↓        ↓
Number   Popup    Calculate  Done!
```

## 🎨 Design System
```
Fonts:     System fonts (Apple-style)
Radius:    12px (default), 20px (large)
Shadow:    0 2px 10px (subtle)
Spacing:   12px, 20px, 24px gaps
```

## 📈 Browser Support
```
✓ Brave (primary)
✓ Chrome
✓ Edge
✓ Chromium-based
✗ Firefox (different API)
✗ Safari (different API)
```

## 🔧 Customization
```
Change default rate:    popup.js line 4
Change primary color:   popup.css line 3
Add new preset:         popup.html settings section
Modify popup width:     popup.css line 63
```

## 🎓 Learn More
```
Chrome API:     developer.chrome.com/docs/extensions/
CSS Animation:  developer.mozilla.org/docs/Web/CSS
Web Storage:    developer.mozilla.org/docs/Web/API/Storage
```

## ⚙️ File Sizes
```
popup.html        ~2KB
popup.css         ~10KB
popup.js          ~3KB
content.js        ~2KB
background.js     ~1KB
manifest.json     ~0.5KB
icons             ~3KB
TOTAL             ~15KB
```

## 🎯 Use Cases
```
Shopping       → Check items with tax
Invoicing      → Calculate totals
Budget         → Plan spending
Math           → Quick calculations
Comparison     → Compare total costs
Business       → Professional math
```

---

## 📌 Remember

1. **Easy Install** - Takes 30 seconds
2. **Just Works** - No setup needed
3. **Always Ready** - Icon in toolbar
4. **Settings Saved** - Forever persistent
5. **Privacy Safe** - All local, no tracking
6. **Beautiful Design** - Smooth & polished
7. **Zero Overhead** - No extra bloat

---

**Happy Calculating!** 💰📱

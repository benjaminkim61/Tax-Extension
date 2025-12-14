# 💰 Tax Calculator - Brave Extension

A sleek, iOS-style browser extension for Brave that lets you highlight any number and instantly calculate the total with tax. Perfect for quickly checking prices with tax included!

## ✨ Features

- **Easy Number Selection**: Simply highlight any number on any webpage
- **Instant Calculation**: Automatic tax calculation with default 1.13x multiplier
- **Customizable Tax Rates**: Change the tax multiplier anytime with quick preset buttons
- **iOS-Inspired Design**: Beautiful, smooth animations and modern UI
- **Quick Presets**: Common tax rates (+5%, +8%, +10%, +13%, +15%, +20%)
- **Copy to Clipboard**: Quickly copy the calculated total
- **Session Storage**: Settings persist across browser sessions

## 📦 Installation

### For Brave Browser

1. **Clone or download** this repository to your computer
2. Open Brave and navigate to `brave://extensions/`
3. Enable **"Developer mode"** in the top right corner
4. Click **"Load unpacked"** and select the Tax-Extension folder
5. The extension icon will appear in your toolbar!

## 🎯 How to Use

1. **On any webpage**, simply highlight a number (e.g., "99.99")
2. The extension popup will automatically open showing:
   - Original amount
   - Current tax rate
   - Total with tax applied
3. **Adjust the tax rate** by clicking the settings ⚙️ button
4. **Copy the result** to your clipboard with one click

### Keyboard Shortcut
- Press `Ctrl+Shift+X` (after selecting a number) for quick focus

## ⚙️ Settings

### Change Tax Rate
1. Click the **⚙️ settings button** in the extension popup
2. Enter your custom multiplier (e.g., 1.13 for 13% tax)
3. Or click one of the quick preset buttons
4. Click **"Save Settings"**

### Available Presets
- **+5%** (1.05x) - Default for some regions
- **+8%** (1.08x) - Common sales tax
- **+10%** (1.10x)
- **+13%** (1.13x) - Default
- **+15%** (1.15x)
- **+20%** (1.20x) - High tax/VAT regions

## 🎨 Design Features

- **Smooth Animations**: Elegant fade-ins, scale effects, and transitions
- **iOS Color Palette**: Uses Apple's system colors for a premium feel
- **Responsive Layout**: Works perfectly in any window size
- **Dark Elements**: Optimized contrast for readability
- **Clean Interface**: Minimal design, maximum functionality

## 📝 File Structure

```
Tax-Extension/
├── manifest.json          # Extension configuration
├── popup.html            # Main UI
├── popup.css             # iOS-style styling
├── popup.js              # Popup logic
├── content.js            # Web page interaction
├── background.js         # Background service worker
├── icons/
│   ├── icon-16.png      # Small icon
│   ├── icon-48.png      # Medium icon
│   └── icon-128.png     # Large icon
└── README.md             # This file
```

## 🔒 Privacy

- **No data collection**: Your selected numbers are stored locally only
- **No tracking**: This extension doesn't send any data anywhere
- **Local storage only**: Tax rate preferences are stored on your device
- **No unnecessary permissions**: Only reads text you select

## 🚀 Tips & Tricks

### Quick Calculations
- Works with numbers that have commas: "1,500" ✓
- Supports decimals: "99.99" ✓
- Handles large numbers: "1000000.50" ✓

### Speed Tips
1. Double-click a number to select it quickly
2. Use preset buttons for instant tax rate changes
3. Copy button saves you from manual typing

## 🛠️ Developer Info

### Built With
- **HTML5 / CSS3** - Beautiful UI
- **Vanilla JavaScript** - No dependencies
- **Chrome Extensions API V3** - Latest standard

### Browser Support
- ✓ Brave (primary)
- ✓ Chrome
- ✓ Edge
- ✓ Chromium-based browsers

## 🐛 Troubleshooting

### Numbers not being detected?
- Highlight the number with your mouse
- Numbers must contain only digits, periods, and commas
- Avoid text with letters or symbols

### Settings not saving?
- Click the "Save Settings" button
- Ensure the tax rate is a valid number above 0

### Popup not opening?
- Check extension is enabled in `brave://extensions/`
- Reload the webpage
- Disable and re-enable the extension

## 💡 How It Works

1. **Content Script** monitors for number selections on webpages
2. **Popup** displays calculations in real-time
3. **Storage API** remembers your preferred tax rate
4. **Animations** make every interaction feel smooth and responsive

---

**Made with ❤️ for quick tax calculations!**

Highlight any price, instantly see the total with tax. Perfect for shopping, invoicing, or quick math! 💪


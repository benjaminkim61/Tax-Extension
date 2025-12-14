## Extension Architecture

### Core Components

**manifest.json**
- Declares extension permissions and capabilities
- Manifest V3 (latest Chrome Extensions API standard)
- Defines popup, content script, and background worker

**popup.html & popup.js**
- The main UI that appears when you click the extension icon
- Shows calculation results and settings panel
- Uses iOS-style design with smooth animations

**popup.css**
- Beautiful iOS-inspired design system
- Uses CSS variables for consistent colors
- Smooth animations and transitions
- Responsive layout for any window size

**content.js**
- Runs on every webpage you visit
- Detects when you select/highlight text
- Recognizes numbers (with decimals and commas)
- Sends selected numbers to the popup
- Adds subtle highlight animation

**background.js**
- Service Worker that runs in the background
- Handles extension initialization
- Stores and manages tax rate settings
- Coordinates between popup and content scripts

### How It Works

1. **Selection Detection**
   ```
   User highlights "99.99" → Content script detects → Sends to popup
   ```

2. **Calculation**
   ```
   Original: 99.99 × Tax Rate (1.13) = 112.99
   ```

3. **Display**
   ```
   Popup shows both values with smooth animation
   ```

4. **Settings Storage**
   ```
   User changes tax rate → Saved to Chrome storage → Persists forever
   ```

### Key Features Implemented

✅ **Number Detection**
- Regex pattern: `/^[\d.,]+$/`
- Handles decimals and commas
- Validates parsed numbers > 0

✅ **Smooth Animations**
- Fade-in on view changes (0.4s)
- Scale-in for numbers (0.4s)
- Slide-up for buttons (0.5s)
- Bounce animation on empty state

✅ **iOS Design System**
- Apple-inspired color palette
- System fonts (SF Pro Display)
- 12px border radius by default
- Proper contrast ratios (WCAG compliant)

✅ **State Management**
- Main view: Shows calculations
- Settings view: Change tax rate
- Empty state: No number selected
- Toast notifications for user feedback

### Browser Compatibility

- **Brave**: ✅ Full support (primary target)
- **Chrome**: ✅ Full support (Manifest V3)
- **Edge**: ✅ Full support (Chromium-based)
- **Firefox**: ❌ Not compatible (different API)

### Storage Mechanism

**Chrome Local Storage**
```json
{
  "taxRate": 1.13
}
```

**Session Storage** (temporary)
```json
{
  "selectedNumber": "99.99"
}
```

### API Permissions Used

- `scripting` - Run content scripts on pages
- `activeTab` - Access current tab
- `storage` - Save/retrieve settings
- `<all_urls>` - Work on any webpage

### Performance Considerations

- Lightweight: No external dependencies
- Fast startup: Minimal initialization
- Efficient selection detection: Uses native mouseup event
- Optimized animations: GPU-accelerated CSS transforms
- Smart storage: Uses session + local storage appropriately

### Customization Guide

**Change Default Tax Rate**
- Edit `popup.js` line 4: `let currentTaxRate = 1.13;`
- Or hardcode in `background.js` initialization

**Modify Colors**
- Edit CSS variables in `popup.css` (lines 1-17)
- Primary color: `--primary: #007AFF`
- Secondary: `--secondary: #F2F2F7`

**Add New Preset Buttons**
- Edit `popup.html` preset-buttons section
- Add: `<button class="preset-btn" data-rate="1.25">+25%</button>`

**Change Popup Size**
- Edit `body { width: 380px; }` in `popup.css`
- Adjust `min-height: 500px` for vertical space

### Debugging Tips

**Check Console**
- Right-click popup → Inspect → Console tab
- Look for any JavaScript errors

**Test Content Script**
- Open DevTools on any webpage
- Console → Type: `document.addEventListener('mouseup', ...)`

**Inspect Storage**
- DevTools → Application → Local Storage
- See saved `taxRate` value

**Enable Detailed Logging** (in popup.js):
```javascript
console.log('Selected number:', selectedNumber);
console.log('Current tax rate:', currentTaxRate);
console.log('Calculated total:', selectedNumber * currentTaxRate);
```

### Future Enhancement Ideas

- [ ] Dark mode toggle
- [ ] Multiple currency support
- [ ] History of recent calculations
- [ ] Keyboard shortcuts customization
- [ ] Floating calculator widget
- [ ] Right-click context menu
- [ ] Export calculation history
- [ ] Custom preset names
- [ ] Percentage vs multiplier toggle
- [ ] Decimal place customization

### Code Quality

- ✅ No external dependencies
- ✅ Vanilla JavaScript (ES6)
- ✅ Comments explaining complex logic
- ✅ Consistent naming conventions
- ✅ CSS custom properties for maintainability
- ✅ Error handling with try-catch blocks
- ✅ Graceful fallbacks for missing values

---

**Last Updated**: December 2024
**Version**: 1.0.0
**Status**: Production Ready

## Testing Guide

### Installation Testing

**Step 1: Load Extension**
- [ ] Open `brave://extensions/`
- [ ] Enable Developer mode (top right)
- [ ] Click "Load unpacked"
- [ ] Select Tax-Extension folder
- [ ] Extension appears in toolbar

**Step 2: Verify Extension Icon**
- [ ] Blue icon with "$" appears in toolbar
- [ ] Click icon - popup opens
- [ ] Shows empty state initially

### Functional Testing

#### Test 1: Number Detection
1. [ ] Navigate to any webpage with numbers
   - Try: Amazon, eBay, calculator.com, or any news site
2. [ ] Highlight a number like "99.99"
3. [ ] Expected: Popup opens automatically
4. [ ] Check: Original amount shows $99.99
5. [ ] Check: Total shows $112.99 (99.99 × 1.13)

#### Test 2: Different Number Formats
- [ ] **Simple**: Select "100" → Shows $100.00 and $113.00
- [ ] **Decimals**: Select "99.99" → Shows correct calculation
- [ ] **Large**: Select "1000000" → Shows correct calculation
- [ ] **Commas**: Select "1,500.50" → Shows correct calculation

#### Test 3: Settings Panel
1. [ ] Click ⚙️ settings button
2. [ ] Settings view slides in smoothly
3. [ ] Tax rate shows current value (1.13)
4. [ ] Back button is visible
5. [ ] Six preset buttons visible (+5% through +20%)

#### Test 4: Change Tax Rate
1. [ ] Click a preset button like [+15%]
   - [ ] Button becomes highlighted (blue)
   - [ ] Value changes to 1.15
2. [ ] Click "Save Settings"
   - [ ] Toast shows "✓ Settings saved"
3. [ ] Highlight a number again
   - [ ] Calculates with new rate (×1.15 not ×1.13)

#### Test 5: Custom Tax Rate
1. [ ] Open Settings
2. [ ] Clear the input field
3. [ ] Type "1.08" manually
   - [ ] [+8%] button should highlight
4. [ ] Click "Save Settings"
5. [ ] Test calculation with new rate
   - [ ] 100 should now equal $108.00

#### Test 6: Copy to Clipboard
1. [ ] Highlight a number (e.g., "50")
2. [ ] See result ($56.50 with 1.13x)
3. [ ] Click "📋 Copy Total"
   - [ ] Toast shows "✓ Copied to clipboard"
4. [ ] Open notepad or document
5. [ ] Paste (Ctrl+V)
   - [ ] Should paste "56.50" or similar

#### Test 7: Animations
- [ ] **Fade-in**: Views transition smoothly (not instantly)
- [ ] **Scale-in**: Numbers scale up when displayed
- [ ] **Slide-up**: Buttons slide up from bottom
- [ ] **Bounce**: Empty state icon bounces gently
- [ ] **Button hover**: Buttons lift up on hover
- [ ] **Button press**: Buttons compress when clicked

#### Test 8: Settings Persistence
1. [ ] Set tax rate to 1.20
2. [ ] Click "Save Settings"
3. [ ] Close extension popup
4. [ ] Close Brave completely
5. [ ] Reopen Brave and extension
6. [ ] Open Settings
7. [ ] Tax rate should still be 1.20 ✓

#### Test 9: Empty State
1. [ ] Open extension without highlighting anything
2. [ ] Should show "No Number Selected"
3. [ ] Shows helpful hint text
4. [ ] Shows bouncing icon
5. [ ] Click "Settings" button still works

#### Test 10: Error Cases
- [ ] **No number selected**: Shows empty state ✓
- [ ] **Select text with letters**: Not recognized (expected)
  - Try: "Price: 50" → Only "50" detects if separate
- [ ] **Select "$100"**: Should detect "100" ($ is filtered)
- [ ] **Select "0"**: Rejects (invalid price)
- [ ] **Select negative**: Rejects (invalid)

### Browser Compatibility Testing

- [ ] **Brave**: Test all features
- [ ] **Chrome**: Test all features (if available)
- [ ] **Edge**: Test all features (if available)

### UI/UX Testing

#### Responsiveness
- [ ] Popup doesn't overflow at 380px width
- [ ] Buttons fit on single row
- [ ] Text doesn't wrap awkwardly
- [ ] All buttons are tappable (>40px height)

#### Visual Design
- [ ] Colors match iOS style (blue #007AFF)
- [ ] Fonts are clean (system font stack)
- [ ] Spacing is consistent (12px, 20px, 24px)
- [ ] Shadows are subtle, not harsh
- [ ] Border radius is consistent (12px, 20px)

#### Readability
- [ ] Large numbers are easy to read
- [ ] Labels are clear and concise
- [ ] Hint text is noticeable but subtle
- [ ] Toast messages are clear and visible

### Performance Testing

#### Load Time
- [ ] Popup opens within 200ms of clicking icon
- [ ] Settings view loads instantly
- [ ] Number detection happens in <10ms

#### Memory
- [ ] Extension doesn't cause browser slowdown
- [ ] Multiple calculations don't leak memory
- [ ] Closing popup frees resources

#### Animations
- [ ] All animations run smoothly (60 FPS)
- [ ] No stuttering or jank
- [ ] Animations complete without lag

### Edge Cases

**Test 1: Very Large Numbers**
- [ ] Input: 999999999
- [ ] Expected: Shows formatted correctly
- [ ] Total calculates without overflow

**Test 2: Very Small Numbers**
- [ ] Input: 0.01
- [ ] Expected: Shows $0.01 and total

**Test 3: Many Decimal Places**
- [ ] Input: 99.9999
- [ ] Expected: Handles gracefully (rounded to 2 decimals)

**Test 4: Rapid Selections**
- [ ] Highlight multiple numbers quickly
- [ ] Expected: Shows latest selection
- [ ] No crashes or missed updates

**Test 5: Settings Reset**
- [ ] Set rate to 1.50
- [ ] Unload extension
- [ ] Reload extension
- [ ] Check: Rate should be 1.50 (persisted)

### Cross-Website Testing

Test on these popular sites:

- [ ] **Amazon**: Find prices, highlight, calculate
- [ ] **eBay**: Bid amounts, shipping costs
- [ ] **Calculator.com**: Any displayed numbers
- [ ] **Google Sheets**: Cell values with numbers
- [ ] **Banking site**: Account balances
- [ ] **Invoice tools**: Line items and totals

### Accessibility Testing

- [ ] **Keyboard Navigation**: Tab through all buttons
- [ ] **Color Contrast**: Blue on white (check with tool)
- [ ] **Focus States**: Can see which button is focused
- [ ] **Touch**: Works on touchscreen laptops
- [ ] **Screen Reader**: Can read button purposes

### Stress Testing

- [ ] Open 10 tabs simultaneously
- [ ] Highlight in each tab
- [ ] Extension remains responsive
- [ ] No memory leaks

- [ ] Highlight same number 50 times
- [ ] Change settings 20 times
- [ ] No crashes or errors

### Cleanup Testing

- [ ] [ ] Unload extension from `brave://extensions/`
- [ ] [ ] Extension icon disappears
- [ ] [ ] Highlighting doesn't trigger anything
- [ ] [ ] Reload extension
- [ ] [ ] Works normally again

---

## Test Results Checklist

**Date**: __________
**Tester**: __________
**Browser**: __________

### Critical Features
- [ ] Number detection works
- [ ] Tax calculation is accurate
- [ ] Settings save and persist
- [ ] UI displays correctly

### Important Features
- [ ] Animations are smooth
- [ ] Copy to clipboard works
- [ ] Presets work correctly
- [ ] Empty state displays

### Nice-to-Have
- [ ] Toast notifications appear
- [ ] Design looks iOS-like
- [ ] Performance is good
- [ ] No console errors

**Overall Status**: ☐ PASS ☐ FAIL

**Issues Found**: ___________________
_________________________________
_________________________________

**Notes**: ___________________
_________________________________

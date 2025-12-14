// Popup UI Logic
let currentTaxRate = 1.13;
let selectedNumber = null;

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
  // Load saved tax rate
  const stored = await chrome.storage.local.get('taxRate');
  if (stored.taxRate) {
    currentTaxRate = stored.taxRate;
  }

  // Initialize views
  updateTaxRateDisplay();
  checkForSelectedNumber();
  setupEventListeners();

  // Show empty state by default
  showView('empty-state');
});

// Setup event listeners
function setupEventListeners() {
  // Header settings button
  document.getElementById('settingsBtn').addEventListener('click', () => {
    showView('settings-view');
    updateSettingsUI();
  });

  // Main view settings button
  document.getElementById('openSettingsBtn').addEventListener('click', () => {
    showView('settings-view');
    updateSettingsUI();
  });

  // Back button
  document.getElementById('backBtn').addEventListener('click', () => {
    showView('main-view');
  });

  // Copy button
  document.getElementById('copyBtn').addEventListener('click', copyTotal);

  // Save settings
  document.getElementById('saveBtn').addEventListener('click', saveSettings);

  // Preset buttons
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const rate = parseFloat(btn.dataset.rate);
      document.getElementById('taxRateInput').value = rate;
      updatePresetButtons(rate);
    });
  });

  // Tax rate input
  document.getElementById('taxRateInput').addEventListener('input', (e) => {
    const rate = parseFloat(e.target.value);
    if (!isNaN(rate) && rate > 0) {
      updatePresetButtons(rate);
    }
  });

  // Listen for messages from content script
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'numberSelected') {
      selectedNumber = request.number;
      showView('main-view');
      updateDisplay();
      sendResponse({ success: true });
    }
  });
}

// Show/hide views
function showView(viewName) {
  document.getElementById('mainView').classList.remove('active');
  document.getElementById('settingsView').classList.remove('active');
  document.getElementById('emptyState').classList.remove('active');

  document.getElementById(viewName).classList.add('active');
}

// Update display with current number and tax calculation
function updateDisplay() {
  if (!selectedNumber) return;

  const original = parseFloat(selectedNumber);
  const total = (original * currentTaxRate).toFixed(2);

  document.getElementById('originalAmount').textContent = original.toFixed(2);
  document.getElementById('totalAmount').textContent = total;
  updateTaxRateDisplay();
}

// Update tax rate display
function updateTaxRateDisplay() {
  const display = (currentTaxRate * 100 - 100).toFixed(0);
  document.getElementById('taxRateDisplay').textContent = `${currentTaxRate}x`;
}

// Update settings UI
function updateSettingsUI() {
  document.getElementById('taxRateInput').value = currentTaxRate;
  updatePresetButtons(currentTaxRate);
}

// Update preset button active states
function updatePresetButtons(rate) {
  document.querySelectorAll('.preset-btn').forEach(btn => {
    const btnRate = parseFloat(btn.dataset.rate);
    if (Math.abs(btnRate - rate) < 0.01) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Save settings
async function saveSettings() {
  const input = document.getElementById('taxRateInput');
  const newRate = parseFloat(input.value);

  if (isNaN(newRate) || newRate <= 0) {
    showToast('Please enter a valid tax rate');
    return;
  }

  currentTaxRate = newRate;
  await chrome.storage.local.set({ taxRate: currentTaxRate });
  
  showToast('✓ Settings saved');
  
  // Update display if we have a number
  if (selectedNumber) {
    updateDisplay();
  }

  // Return to main view
  setTimeout(() => {
    showView('main-view');
  }, 400);
}

// Copy total to clipboard
function copyTotal() {
  if (!selectedNumber) return;

  const total = (parseFloat(selectedNumber) * currentTaxRate).toFixed(2);
  navigator.clipboard.writeText(total).then(() => {
    showToast('✓ Copied to clipboard');
  }).catch(() => {
    showToast('Failed to copy');
  });
}

// Show toast notification
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Check if there's a selected number from content script
async function checkForSelectedNumber() {
  const result = await chrome.storage.session.get('selectedNumber');
  if (result.selectedNumber) {
    selectedNumber = result.selectedNumber;
    showView('main-view');
    updateDisplay();
  }
}

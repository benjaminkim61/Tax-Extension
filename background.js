// Background Service Worker
chrome.runtime.onInstalled.addListener(() => {
  // Initialize default tax rate
  chrome.storage.local.get('taxRate', (result) => {
    if (!result.taxRate) {
      chrome.storage.local.set({ taxRate: 1.13 });
    }
  });
});

// Handle messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getTaxRate') {
    chrome.storage.local.get('taxRate', (result) => {
      sendResponse({ taxRate: result.taxRate || 1.13 });
    });
    return true;
  }
});

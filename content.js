// Content Script - Handles number detection and highlighting

// Detect number selection
document.addEventListener('mouseup', () => {
  const selectedText = window.getSelection().toString().trim();
  
  // Check if selection is a valid number
  if (selectedText && /^[\d.,]+$/.test(selectedText)) {
    // Remove commas and convert to number
    const cleanNumber = selectedText.replace(/,/g, '');
    const number = parseFloat(cleanNumber);
    
    if (!isNaN(number) && number > 0) {
      // Store in session
      chrome.storage.session.set({ selectedNumber: number.toString() });
      
      // Notify popup
      chrome.runtime.sendMessage({
        action: 'numberSelected',
        number: number.toString()
      }).catch(() => {
        // Popup might not be open, that's ok
      });

      // Highlight the selected number
      highlightSelection(selectedText);
    }
  }
});

// Highlight the selected text with animation
function highlightSelection(text) {
  const selection = window.getSelection();
  if (selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);
  const span = document.createElement('span');
  span.style.backgroundColor = '#FFD700';
  span.style.animation = 'taxHighlight 0.6s ease';
  
  // Add animation styles
  const style = document.createElement('style');
  if (!document.getElementById('tax-highlight-style')) {
    style.id = 'tax-highlight-style';
    style.textContent = `
      @keyframes taxHighlight {
        0% {
          backgroundColor: #FFD700;
          boxShadow: 0 0 0 3px rgba(255, 215, 0, 0.5);
        }
        100% {
          backgroundColor: transparent;
          boxShadow: 0 0 0 0 rgba(255, 215, 0, 0);
        }
      }
    `;
    document.head.appendChild(style);
  }

  try {
    range.surroundContents(span);
    
    // Remove the highlight after animation
    setTimeout(() => {
      const parent = span.parentNode;
      while (span.firstChild) {
        parent.insertBefore(span.firstChild, span);
      }
      parent.removeChild(span);
    }, 600);
  } catch (e) {
    // If surroundContents fails, just skip the visual highlight
  }
}

// Listen for keyboard shortcuts (Ctrl+Shift+X to focus on tax calculation)
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && e.key === 'X') {
    const selection = window.getSelection().toString().trim();
    if (selection) {
      const cleanNumber = selection.replace(/,/g, '');
      const number = parseFloat(cleanNumber);
      
      if (!isNaN(number) && number > 0) {
        chrome.storage.session.set({ selectedNumber: number.toString() });
        chrome.runtime.sendMessage({
          action: 'numberSelected',
          number: number.toString()
        }).catch(() => {});
      }
    }
  }
});

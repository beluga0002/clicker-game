let clicks = 0;
let clickPower = 1;
let upgradeCost = 10;
let autoClickCost = 50;
let autoClicker = false;
let autoClickRate = 1000; // Auto click interval in milliseconds
let autoClickInterval;

// Load game state from local storage
window.onload = function() {
  loadGame();
  // ... (existing code)

  updateUI();
};

function loadGame() {
  const savedClicks = localStorage.getItem('clicks');
  const savedClickPower = localStorage.getItem('clickPower');
  const savedUpgradeCost = localStorage.getItem('upgradeCost');
  const savedAutoClickCost = localStorage.getItem('autoClickCost');
  const savedAutoClicker = localStorage.getItem('autoClicker');

  if (savedClicks !== null) clicks = parseInt(savedClicks);
  if (savedClickPower !== null) clickPower = parseInt(savedClickPower);
  if (savedUpgradeCost !== null) upgradeCost = parseInt(savedUpgradeCost);
  if (savedAutoClickCost !== null) autoClickCost = parseInt(savedAutoClickCost);
  if (savedAutoClicker !== null) autoClicker = savedAutoClicker === 'true';
}

function saveGame() {
  localStorage.setItem('clicks', clicks);
  localStorage.setItem('clickPower', clickPower);
  localStorage.setItem('upgradeCost', upgradeCost);
  localStorage.setItem('autoClickCost', autoClickCost);
  localStorage.setItem('autoClicker', autoClicker);
}

// ... (existing code)

// Call saveGame() whenever a significant game state change occurs
function buyUpgrade() {
  if (clicks >= upgradeCost) {
    clickPower++;
    clicks -= upgradeCost;
    upgradeCost *= 2;

    updateUI();
    saveGame(); // Save after upgrade purchase
  }
}

function buyAutoClicker() {
  if (clicks >= autoClickCost && !autoClicker) {
    autoClicker = true;
    clicks -= autoClickCost;
    autoClickCost *= 2;

    updateUI();
    saveGame(); // Save after auto clicker purchase
    // ... (existing code for auto-clicker logic)
  }
}

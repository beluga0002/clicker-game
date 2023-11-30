let clicks = 0;
let clickPower = 1;
let upgradeCosts = [10, 25, 50]; // Array of upgrade costs
let upgradeMultipliers = [2, 3, 4]; // Corresponding multipliers
let autoClickCost = 20; // Auto-clicker cost
let autoClickRate = 150; // Auto-click rate in milliseconds
let autoClickInterval;

window.onload = function() {
  loadGame();
  // ... (existing code)

  document.getElementById('clickButton').addEventListener('click', click);
  document.getElementById('saveButton').addEventListener('click', saveGame);

  const upgradeButtons = document.querySelectorAll('.upgradeButton');
  upgradeButtons.forEach(button => {
    button.addEventListener('click', () => {
      buyUpgrade(button);
    });
  });

  const autoClickButton = document.querySelector('.autoClickButton');
  autoClickButton.addEventListener('click', buyAutoClicker);

  updateUI();
};

function buyAutoClicker() {
  if (clicks >= autoClickCost && !autoClickInterval) {
    clicks -= autoClickCost;
    autoClickCost *= 2;

    autoClickInterval = setInterval(function() {
      clicks += clickPower;
      updateUI();
      saveGame(); // Save after auto-click
    }, autoClickRate);

    updateUI();
    saveGame(); // Save after auto-clicker purchase
  }
}

// ... (existing code)

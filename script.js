let clicks = 0;
let clickPower = 1;
let upgradeCosts = [10, 25, 50]; // Array of upgrade costs
let upgradeMultipliers = [2, 3, 4]; // Corresponding multipliers
let autoClickCosts = [20, 50, 100]; // Array of auto-clicker costs
let autoClickRates = [500, 200, 100]; // Corresponding auto-click rates in milliseconds
let autoClickIntervals = []; // Array to store auto-click intervals
// ... (other variables and functions)

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

  const autoClickButtons = document.querySelectorAll('.autoClickButton');
  autoClickButtons.forEach(button => {
    button.addEventListener('click', () => {
      buyAutoClicker(button);
    });
  });

  updateUI();
};

function buyAutoClicker(button) {
  const index = Array.from(button.parentNode.children).indexOf(button);
  const cost = autoClickCosts[index];
  const rate = autoClickRates[index];

  if (clicks >= cost && autoClickIntervals[index] === undefined) {
    clicks -= cost;
    autoClickCosts[index] *= 2;

    autoClickIntervals[index] = setInterval(function() {
      clicks += clickPower;
      updateUI();
      saveGame(); // Save after auto-click
    }, rate);

    updateUI();
    saveGame(); // Save after auto-clicker purchase
  }
}

// ... (existing code)


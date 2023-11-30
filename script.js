let clicks = 0;
let clickPower = 1;
let upgradeCost = 10;
let autoClickCost = 50;
let autoClicker = false;
let autoClickRate = 125; // Auto click interval in milliseconds
let autoClickInterval;

window.onload = function() {
  // ... (existing code)

  document.getElementById('clickButton').addEventListener('click', click);
  document.getElementById('upgradeButton').addEventListener('click', buyUpgrade);
  document.getElementById('autoClickButton').addEventListener('click', buyAutoClicker);

  updateUI();
};

function updateUI() {
  document.getElementById('clicks').textContent = clicks;
  document.getElementById('clickPower').textContent = clickPower;
  document.getElementById('upgradeCost').textContent = upgradeCost;
  document.getElementById('autoClickCost').textContent = autoClickCost;
}

function click() {
  clicks += clickPower;
  document.getElementById('clicks').textContent = clicks;
}

function buyUpgrade() {
  if (clicks >= upgradeCost) {
    clickPower++;
    clicks -= upgradeCost;
    upgradeCost *= 2;

    updateUI();
  }
}

function buyAutoClicker() {
  if (clicks >= autoClickCost && !autoClicker) {
    autoClicker = true;
    clicks -= autoClickCost;
    autoClickCost *= 2;

    updateUI();
    autoClickInterval = setInterval(function() {
      clicks += clickPower;
      document.getElementById('clicks').textContent = clicks;
    }, autoClickRate);
  }
}

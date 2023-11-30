let clickCount = 0;
let autoClickerCost = 10;
let upgradeCost = 50;
let autoClickers = 0;
let clickPower = 1;

function clickButton() {
  clickCount += clickPower;
  document.getElementById('clickCount').innerText = clickCount;
}

function buyAutoClicker() {
  if (clickCount >= autoClickerCost) {
    autoClickers++;
    clickCount -= autoClickerCost;
    autoClickerCost = Math.ceil(autoClickerCost * 1.5);
    document.getElementById('clickCount').innerText = clickCount;
    document.getElementById('autoClickerCost').innerText = autoClickerCost;
    startAutoClicker();
  } else {
    alert("Not enough clicks to buy an autoclicker!");
  }
}

function startAutoClicker() {
  setInterval(function() {
    clickCount += autoClickers * clickPower;
    document.getElementById('clickCount').innerText = clickCount;
  }, 1000);
}

function upgrade() {
  if (clickCount >= upgradeCost) {
    clickPower++;
    clickCount -= upgradeCost;
    upgradeCost = Math.ceil(upgradeCost * 2);
    document.getElementById('clickCount').innerText = clickCount;
    document.getElementById('upgradeCost').innerText = upgradeCost;
  } else {
    alert("Not enough clicks to upgrade!");
  }
}

// Get elements
const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgradeBtn = document.getElementById("upgrade");
const multiplierBtn = document.getElementById("multiplier");
const multiCounter = document.getElementById("multiCounter");
const autoClickerBtn = document.getElementById("autoclicker");
const autoCounter = document.getElementById("autoCounter");
const achievement = document.getElementById("achievement"); 
const achievementScreen = document.getElementById("achievementScreen"); 
const achievementList = document.getElementById("achievementList"); 
const openAchievements = document.getElementById("openAchievements"); 
const closeAchievements = document.getElementById("closeAchievements");
const buyGrandmaBtn = document.getElementById("buyGrandma");
const grandmaCountDisplay = document.getElementById("grandmaCount");
const grandmaCostDisplay = document.getElementById("grandmaCost");
const cps = document.getElementById("cps");

// Settings modal elements 
const settingsModal = document.getElementById("settingsModal"); 
const openSettings = document.getElementById("openSettings"); 
const closeSettings = document.getElementById("closeSettings"); 
const resetGameBtn = document.getElementById("resetGame"); 

let count = parseInt(localStorage.getItem("cookieCount")) || 0;
let multiplier = parseInt(localStorage.getItem("cookieMultiplier")) || 1;
let upgradeValue = parseInt(localStorage.getItem("cookieUpgrade")) || 1;
let autoClickers = parseInt(localStorage.getItem("cookieAutoClickers")) || 0;
let upgradePrice = parseInt(localStorage.getItem("upgradePrice")) || 10;
let autoClickerPrice = parseInt(localStorage.getItem("autoClickerPrice")) || 100;
let multiplierPrice = parseInt(localStorage.getItem("multiplierPrice")) || 50;
let achievementsUnlocked = JSON.parse(localStorage.getItem("cookieAchievements")) || {};
let grandmas = parseInt(localStorage.getItem("grandmaCount")) || 0;
let grandmaPrice = parseInt(localStorage.getItem("grandmaPrice")) || 500;
let grandmaProduction = grandmas * 2; // Each grandma bakes 2 cookies/sec

updateUpgradeButtons(); // Ensure buttons display correct prices

// Function to update all upgrade buttons dynamically
function updateUpgradeButtons() {
    upgradeBtn.textContent = `Upgrade (+${upgradeValue} per click, Cost: ${upgradePrice})`;
    multiplierBtn.textContent = `Multiplier (x2, Cost: ${multiplierPrice})`;
    autoClickerBtn.textContent = `Buy Clicker (+1/sec, Cost: ${autoClickerPrice})`;
    counter.textContent = count;
    multiCounter.textContent = upgradeValue * multiplier;
    autoCounter.textContent = autoClickers;
    cps.textContent = autoClickers + grandmaProduction;
    grandmaCountDisplay.textContent = `${grandmas}`;
    grandmaCostDisplay.textContent = grandmaPrice;
}

// Function to unlock achievements 
function unlockAchievement(milestone, text) { 
    if (!achievementsUnlocked[milestone]) { 
        achievement.textContent = `🏆 ${text} 🏆`; 
        achievement.style.display = "block"; 
        setTimeout(() => achievement.style.display = "none", 3000); 
        achievementsUnlocked[milestone] = text; 
        localStorage.setItem("cookieAchievements", JSON.stringify(achievementsUnlocked)); 
    } 
};

// Click event: Gain cookies
cookie.addEventListener("click", () => {
    count += upgradeValue * multiplier;
    counter.textContent = count;
    localStorage.setItem("cookieCount", count);

    // Check for achievements 
    if (count >= 15) unlockAchievement(15, "Just starting out - 15 Cookies!"); 
    if (count >= 100) unlockAchievement(100, "Starter Clicker - 100 Cookies!"); 
    if (count >= 500) unlockAchievement(500, "Master Clicker - 500 Cookies!"); 
    if (count >= 1000) unlockAchievement(1000, "Cookie Hoarder - 1,000 Cookies!"); 
    if (count >= 5000) unlockAchievement(5000, "Cookie Tycoon - 5,000 Cookies!"); 
    if (count >= 10000) unlockAchievement(10000, "Cookie Empire - 10,000 Cookies!"); 
    if (count >= 50000) unlockAchievement(50000, "Cookie Overlord - 50,000 Cookies!"); 
    if (count >= 100000) unlockAchievement(100000, "Cookie God - 100,000 Cookies!");
});


// Buy Upgrade (+1 per click, dynamic price increase)
upgradeBtn.addEventListener("click", () => {
    if (count >= upgradePrice) {
        count -= upgradePrice;
        upgradeValue++;
        upgradePrice = Math.ceil(upgradePrice * 1.15);
        
        counter.textContent = count;
        localStorage.setItem("cookieCount", count);
        localStorage.setItem("cookieUpgrade", upgradeValue);
        localStorage.setItem("upgradePrice", upgradePrice);
        updateUpgradeButtons(); // Ensure price updates visually
    }
});

// Increase Multiplier (x2)
multiplierBtn.addEventListener("click", () => {
    if (count >= multiplierPrice) {
        count -= multiplierPrice;
        multiplier++;
        multiplierPrice = Math.ceil(multiplierPrice * 1.25);
        
        counter.textContent = count;
        multiCounter.textContent = multiplier;
        localStorage.setItem("cookieCount", count);
        localStorage.setItem("cookieMultiplier", multiplier);
        localStorage.setItem("multiplierPrice", multiplierPrice);
        updateUpgradeButtons(); // Ensure price updates visually
    }
});

// Buy Auto Clicker (generates cookies every second)
autoClickerBtn.addEventListener("click", () => {
    if (count >= autoClickerPrice) {
        count -= autoClickerPrice;
        autoClickers++;
        autoClickerPrice = Math.ceil(autoClickerPrice * 1.3);
        
        counter.textContent = count;
        autoCounter.textContent = autoClickers;
        localStorage.setItem("cookieCount", count);
        localStorage.setItem("cookieAutoClickers", autoClickers);
        localStorage.setItem("autoClickerPrice", autoClickerPrice);
        updateUpgradeButtons(); // Ensure price updates visually
    }
});

buyGrandmaBtn.addEventListener("click", () => {
    if (count >= grandmaPrice) {
        count -= grandmaPrice;
        grandmas++;
        grandmaPrice = Math.ceil(grandmaPrice * 1.25); // Price increases
        grandmaProduction = grandmas * 2; // Each grandma makes 2 cookies/sec

        // Save data
        localStorage.setItem("cookieCount", count);
        localStorage.setItem("grandmaCount", grandmas);
        localStorage.setItem("grandmaPrice", grandmaPrice);

        // Update UI
        grandmaCountDisplay.textContent = `${grandmas}`;
        grandmaCostDisplay.textContent = grandmaPrice;
        updateUpgradeButtons();
    }
});

// Auto Clicker Function (runs every second)
setInterval(() => {
    if (autoClickers > 0) {
        count += autoClickers;
        counter.textContent = count;
        localStorage.setItem("cookieCount", count);
    }
}, 1000);

setInterval(() => {
    if (grandmas > 0) {
        count += grandmaProduction;
        counter.textContent = count;
        localStorage.setItem("cookieCount", count);
    }
}, 1000); // Every second


window.addEventListener("load", updateButtonState())

// Open achievements screen 
openAchievements.addEventListener("click", () => { 
    achievementList.innerHTML = ""; // Clear previous list 
    if (Object.keys(achievementsUnlocked).length === 0) { 
        let listItem = document.createElement("li"); 
        listItem.textContent = "No achievements unlocked yet!"; 
        achievementList.appendChild(listItem); } 
    else { 
        for (let key in achievementsUnlocked) { 
            let listItem = document.createElement("li"); 
            listItem.textContent = achievementsUnlocked[key]; // Display achievement name 
            achievementList.appendChild(listItem); 
        } 
    } 
    achievementScreen.style.display = "flex"; 
}); 

// Close achievements screen 
closeAchievements.addEventListener("click", () => { 
    achievementScreen.style.display = "none"; 
}); 

// Open settings modal 
openSettings.addEventListener("click", () => { 
    settingsModal.style.display = "block"; 
}); 

// Close settings modal 
closeSettings.addEventListener("click", () => { 
    settingsModal.style.display = "none"; 
}); 

// Reset ALL progress 
resetGameBtn.addEventListener("click", () => { 
    let confirmReset = confirm("Are you sure you want to reset ALL progress? This cannot be undone!"); 
    if (confirmReset) { 
        localStorage.clear(); 
        localStorage.clear();
        alert("All game progress has been reset!"); 
        count = 0;
        counter.textContent = count;
        location.reload(); // Refresh page to apply reset 
    } 
}); 


function updateButtonState() { 
    upgradeBtn.classList.toggle("disabled", count < upgradePrice); 
    multiplierBtn.classList.toggle("disabled", count < multiplierPrice); 
    autoClickerBtn.classList.toggle("disabled", count < autoClickerPrice);
    buyGrandmaBtn.classList.toggle("disabled", count < grandmaPrice);  
};

setInterval(() => {
    updateButtonState();
}, 1);
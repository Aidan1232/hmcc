const splash = document.getElementById("splash");
const splashMessages = [
    "You feel an overwhelming craving for cookies...",
    "The universe is made of cookies and wishes.",
    "Cookies are the answer to everything.",
    "You suddenly understand how the world works... It's all about cookies.",
    "A mysterious force whispers: 'Bake more...'",
    "Is there such a thing as too many cookies? Scientists say no.",
    "Cookies! Infinite cookies! Unlimited cookies!",
    "Your cookies grant you incredible wisdom!",
    "Is this the peak of human evolution? A cookie empire?",
    "Bake, click, rule. Such is life.",
    "The cookie gods are watching...",
    "Your baking prowess is unmatched in history!",
    "Every great civilization was built on cookies!",
    "Cookies transcend time and space...",
    "Behold, the great cookie singularity!",
    "You have been chosen. The cookies demand greatness.",
    "The flavor... the crunch... the undeniable power of cookies.",
    "What if life itself is a simulation designed to create cookies?",
    "Cookies whisper secrets of the universe.",
    "One day, cookies will lead humanity to the stars.",
    "In cookies we trust!",
    "Your empire crumbles... like a well-baked cookie.",
    "Clicking is just the beginning of cookie enlightenment.",
    "A single crumb can spark a revolution.",
    "Somewhere, in another universe, cookies are currency.",
    "Bake responsibly. Click excessively.",
    "Legend speaks of a cookie so powerful, it bends reality itself...",
    "The dough whispers ancient secrets...",
    "Cookies solve more problems than math ever could.",
    "You stare into the oven. The oven stares back.",
    "What if cookies rule the multiverse?",
    "You can almost taste victory. It tastes like chocolate chips.",
    "This is more than just a game. This is cookie destiny.",
    "The baking prophecy has begun!",
    "Every click brings you closer to greatness. And more cookies.",
    "Your cookies have been declared a national treasure!",
    "Is this world even real? Or just layers of cookie dough?",
    "Cookies unite civilizations. You are proof of that.",
    "The baker’s code is simple: Click. Bake. Prosper.",
    "Your empire expands beyond the known cookieverse!",
    "Beware the void... It is cookie-less.",
    "The cookie gods smile upon your progress.",
    "They doubted your baking power. Now, they kneel.",
    "The first rule of cookie club: Bake as much as possible.",
    "A cookie conspiracy is brewing... You are at the center of it.",
    "What if cookies could talk? They’d say, 'Thank you.'",
    "The stars align. A golden cookie appears!",
    "Your clicks have changed the fate of cookies forever.",
    "Some say cookies existed before time itself.",
    "Every great empire started with a single cookie.",
    "The scent of fresh cookies fills the air...",
    "Cookies hold the secret to happiness.",
    "Your baking power surpasses the legends.",
    "Cookies are love. Cookies are life.",
    "Your cookie empire will be remembered in history books.",
    "Are you even clicking, or are cookies clicking themselves?",
    "A cookie-shaped constellation appears in the sky...",
    "Some say the first cookie was baked by the gods themselves.",
    "Every oven tells a story. Yours tells a legend.",
    "You hear whispers of an ancient recipe... The Ultimate Cookie.",
    "There is no war, only cookies.",
    "Cookies are the fabric of the universe!",
    "The great cookie council acknowledges your supremacy!",
    "You feel the presence of a **golden cookie guardian**...",
    "Your cookies spark **intergalactic diplomacy**.",
    "You wonder: Could cookies fuel space travel?",
    "Is baking cookies the true meaning of life?",
    "The stars themselves are jealous of your cookie mastery!",
    "Every click ripples through the universe... in cookie form!",
    "A hidden civilization worships the power of your cookies.",
    "You wonder if there’s a **cookie-powered AI** watching over you...",
    "The Earth itself is merely a giant oven for baking greatness.",
    "The forbidden recipe is out there... Somewhere...",
    "Ancient texts speak of the **Elder Cookie**...",
    "One does not simply stop baking cookies.",
    "Your oven hums with unnatural energy...",
    "The cookieverse expands faster than light!",
    "Golden cookies are rare... But their power is limitless.",
    "Your cookies alter the very fabric of time itself...",
    "Cookies have transcended physics. They demand more clicks!",
    "The whispers grow louder... Bake more...",
    "Legend speaks of a **Cookie Wizard** watching over you...",
    "Cookies cannot be controlled. They must be respected.",
    "Your empire influences economies across galaxies!",
    "Cookies will save us all... Or destroy us.",
    "Are you baking cookies, or are the cookies baking reality?",
    "This is no ordinary bakery. This is destiny.",
    "Every great leader consumed vast amounts of cookies...",
    "The prophecy foretold your rise.",
    "Your cookies have triggered **a new age of enlightenment!**",
    "You wonder: Are cookies sentient?",
    "Behold! A **Cosmic Cookie Rift** opens before you...",
    "Clicking is merely a formality. The cookies control everything.",
    "What if cookies could dream? Would they dream of you?",
    "The grandmasters of baking bow before your skill...",
    "Reality bends under the weight of your cookie legacy!",
    "Your ovens vibrate with **interdimensional energy!**",
    "Cookies are eternal. They were here before time itself...",
    "A **Golden Cookie Eclipse** is forming...",
    "The world watches in awe as your cookie empire grows...",
    "Your cookies are changing the rules of existence...",
    "A shadowy figure offers you **The Cookie of Infinity**...",
    "You are no longer baking cookies. You are shaping fate itself!"
];

let currentSplashIndex = 0;

function showSplash() {
    splash.textContent = splashMessages[currentSplashIndex];
    
    // Fade in
    splash.style.opacity = 1;

    setTimeout(() => {
        // Fade out smoothly
        splash.style.transition = "opacity 1s ease-in-out"; 
        splash.style.opacity = 0;

        setTimeout(() => {
            currentSplashIndex = (currentSplashIndex + 1) % splashMessages.length;
            showSplash(); // Call again after fade-out completes
        }, 1000); // Allow time for fade-out
    }, 5000); // Time before fading out
}

// Start splash cycle
window.addEventListener("load", showSplash);
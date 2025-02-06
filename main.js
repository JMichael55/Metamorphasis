function skitterBug() {
    const bug = document.querySelector('.bug');

    // Get the current scroll position of the page
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    // Ensure the bug spawns within the visible part of the screen, avoiding the edges
    let startX = Math.random() * (window.innerWidth - 40) + scrollX; // Keep it within the screen considering scroll position
    let startY = Math.random() * (window.innerHeight - 40) + scrollY; // Keep it within the screen considering scroll position

    bug.style.left = `${startX}px`;
    bug.style.top = `${startY}px`;
    bug.style.opacity = 1; // Make it visible

    let steps = 15; // Number of movements before disappearing
    let stepCount = 0;

    function moveBug() {
        if (stepCount >= steps) {
            bug.style.opacity = 0; // Hide the bug after it moves a few steps
            return;
        }

        // Pick a small random direction and distance (like a real bug)
        let deltaX = (Math.random() - 0.5) * 100; // Small movement left/right
        let deltaY = (Math.random() - 0.5) * 100; // Small movement up/down

        startX += deltaX;
        startY += deltaY;

        // Ensure bug stays within the screen bounds, factoring in scroll position
        startX = Math.max(scrollX, Math.min(scrollX + window.innerWidth - 40, startX)); // Bound for horizontal movement
        startY = Math.max(scrollY, Math.min(scrollY + window.innerHeight - 40, startY)); // Bound for vertical movement

        // Move bug smoothly
        bug.style.transform = `translate(${startX - scrollX}px, ${startY - scrollY}px) rotate(${Math.random() * 360}deg)`;

        stepCount++;
        setTimeout(moveBug, Math.random() * 500 + 200); // Vary speed a bit
    }

    moveBug();
}

// Randomly spawn the bug every 5-15 seconds
setInterval(() => {
    if (Math.random() < 0.5) skitterBug(); // 50% chance to appear
}, Math.random() * 10000 + 5000);
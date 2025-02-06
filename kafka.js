document.addEventListener("DOMContentLoaded", () => {
    const eyeImages = [
        "eye.gif", "eye2.gif", "eye3.gif", "cockroach.png",
        "roach2.webp", "eye4.jpg", "centi.png",
        "centi2.png", "eye5.png", "mouth.png"
    ];
    const fonts = [
        "Arial", "Verdana", "Courier New", "Georgia", "Times New Roman",
        "Comic Sans MS", "Impact", "Trebuchet MS", "Lucida Console", "Garamond"
    ];
    const colors = ["red", "cyan", "lime", "magenta", "yellow", "white", "black"];

    /** EXTREME BACKGROUND MOVEMENT - Faster and More Chaotic **/
    function moveBackground() {
        const xOffset = Math.random() * 1500 - 750; // Faster offset
        const yOffset = Math.random() * 1500 - 750; // Faster offset
        const zoomLevel = Math.random() * 150 + 50; // More zoom in/out effect

        document.body.style.backgroundPosition = `${xOffset}px ${yOffset}px`;
        document.body.style.backgroundSize = `${zoomLevel}%`;
        document.body.style.transition = 'background-position 0.3s ease, background-size 0.3s ease';
    }
    setInterval(moveBackground, 300);  // Faster background movement interval

    /** EYES & IMAGES MOVING RANDOMLY AND SLIGHTLY ROTATING **/
    function createMovingImage() {
        const img = document.createElement("img");
        img.src = eyeImages[Math.floor(Math.random() * eyeImages.length)];
        img.classList.add("glitch-image");
        img.style.position = "absolute";
        img.style.left = `${Math.random() * window.innerWidth}px`;
        img.style.top = `${Math.random() * window.innerHeight}px`;
        img.style.transform = `scale(${Math.random() * 1.5 + 0.5}) rotate(${Math.random() * 20 - 10}deg)`;  // Slight rotation
        img.style.maxWidth = "80px";  // Smaller image size
        img.style.maxHeight = "80px"; // Smaller image size
        img.style.zIndex = "1";  // Place images behind text
        document.body.appendChild(img);

        const moveInterval = setInterval(() => {
            img.style.left = `${Math.random() * window.innerWidth}px`;
            img.style.top = `${Math.random() * window.innerHeight}px`;
            img.style.transform = `scale(${Math.random() * 1.5 + 0.5}) rotate(${Math.random() * 20 - 10}deg)`; // Slight rotation
        }, 200); // More frequent movement interval

        setTimeout(() => {
            clearInterval(moveInterval);
            img.remove();
        }, Math.random() * 5000 + 2000);  // Keep images around longer
    }
    setInterval(createMovingImage, 200);  // More frequent element creation

    /** RANDOM TEXT GLITCHING - More frequent and dynamic **/
    function addGlitchText() {
        const glitchText = document.createElement("div");
        glitchText.textContent = "███ Seek out ██ The Scattered Love ███";
        glitchText.style.position = "absolute";
        glitchText.style.left = `${Math.random() * window.innerWidth}px`;
        glitchText.style.top = `${Math.random() * window.innerHeight}px`;
        glitchText.style.fontSize = `${Math.random() * 40 + 20}px`;  // Larger font size
        glitchText.style.color = colors[Math.floor(Math.random() * colors.length)];
        glitchText.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
        glitchText.style.transform = `scale(${Math.random() * 2})`; // No rotation
        glitchText.style.zIndex = "2";  // Place text in front of images
        document.body.appendChild(glitchText);

        const moveInterval = setInterval(() => {
            glitchText.style.left = `${Math.random() * window.innerWidth}px`;
            glitchText.style.top = `${Math.random() * window.innerHeight}px`;
            glitchText.style.transform = `scale(${Math.random() * 2})`; // No rotation
        }, 600);  // Faster text movement interval

        setTimeout(() => {
            clearInterval(moveInterval);
            glitchText.remove();
        }, Math.random() * 5000 + 2000);  // Keep glitch text around longer
    }
    setInterval(addGlitchText, 800);  // More frequent glitch text

    /** INDIVIDUAL TEXT GLITCH EFFECTS - Dynamic and chaotic **/
    const title = document.querySelector("h1");
    const link = title.querySelector("a");
    const text = link.textContent;
    const url = link.href;

    title.innerHTML = "";
    const newLink = document.createElement("a");
    newLink.href = url;
    newLink.style.color = "white";
    newLink.style.textDecoration = "none";

    text.split("").forEach(letter => {
        const span = document.createElement("span");
        span.textContent = letter;
        newLink.appendChild(span);

        if (letter !== " ") {
            setInterval(() => {
                span.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
                span.style.transform = `scale(${Math.random() * 1.5 + 1}) translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
                span.style.color = colors[Math.floor(Math.random() * colors.length)];
                span.style.textShadow = `${Math.random() * 5}px ${Math.random() * 5}px ${colors[Math.floor(Math.random() * colors.length)]}`;
            }, Math.random() * 150 + 50);  // Faster, more chaotic text glitches
        }
    });

    title.appendChild(newLink);
});
function skitterBug() {
    const bug = document.querySelector('.bug');
    
    // Random starting position
    let startX = Math.random() * window.innerWidth;
    let startY = Math.random() * window.innerHeight;
    
    bug.style.left = `${startX}px`;
    bug.style.top = `${startY}px`;
    bug.style.opacity = 1;

    // Create random movement pattern
    let moveBug = setInterval(() => {
        let newX = Math.random() * window.innerWidth;
        let newY = Math.random() * window.innerHeight;
        
        bug.style.transform = `translate(${newX - startX}px, ${newY - startY}px) rotate(${Math.random() * 360}deg)`;
        startX = newX;
        startY = newY;
    }, 200); // Moves every 200ms
    
    // Stop after 3 seconds
    setTimeout(() => {
        clearInterval(moveBug);
        bug.style.opacity = 0;
    }, 3000);
}

// Make bug appear at random intervals
setInterval(skitterBug, Math.random() * 10000 + 5000); // Between 5-15 seconds

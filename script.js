function openLetter() {
    document.getElementById('letter').style.display = 'block'; // Show letter
    document.getElementById('main-message').style.display = 'none'; // Hide main message

    // Apply typewriter effect
    const letterText = `My Love,
    
Words cannot fully convey the ardent love that I have for you. 
You inspire me to be my best, and I want to have you by my side forever. 

You might think that after 2 years I would grow used to you, 
but every day you give me something new to love about you. 💞 

I love you so much. Happy Valentine's. 

Forever yours, 
Your darling wife, Hina`;

    typeWriterEffect(letterText, document.getElementById("letter-text"), 50);
}

function returnToMain() {
    document.getElementById('main-message').style.display = 'block'; // Show main message
    document.getElementById('letter').style.display = 'block'; // Keep letter visible
    document.querySelector('.envelope').style.display = 'block'; // Ensure envelope remains visible
}

function sendVirtualHug() {
    for (let i = 0; i < 10; i++) { // Creates 10 floating hearts
        const heart = document.createElement("div");
        heart.classList.add("heart-animation");
        heart.innerText = "❤️";
        
        // Random positioning
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        
        document.body.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}

// Typewriter Effect
function typeWriterEffect(text, element, speed = 50) {
    let i = 0;
    element.innerHTML = ""; // Clear previous text
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.addEventListener("mousemove", (e) => {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerHTML = "❤️";

    // Positioning hearts at the cursor's location
    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;

    document.body.appendChild(heart);

    // Make the heart float and fade away
    setTimeout(() => {
        heart.style.opacity = "0";
        heart.style.transform = "translateY(-30px)";
    }, 100);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 1000);
});
}

function closeLetter() {
    document.getElementById('letter').style.display = 'none'; // Hide the letter
    document.getElementById('main-message').style.display = 'block'; // Show the main message again
}

function giveFlowers() {
    for (let i = 0; i < 15; i++) { // 15 flowers appear instantly
        setTimeout(() => {
            const flower = document.createElement("div");
            flower.classList.add("flower-animation");
            flower.innerText = "🌹"; // Rose emoji

            // Random positioning
            flower.style.left = Math.random() * 90 + "vw";
            flower.style.top = "100vh"; // Start from the bottom
            flower.style.fontSize = Math.random() * 40 + 40 + "px"; // Bigger flowers (40px-80px)

            document.body.appendChild(flower);

            // Move each flower upwards immediately after being created
            setTimeout(() => {
                flower.style.top = Math.random() * 50 + "vh"; // Move up to mid-screen
                flower.style.opacity = "1";
            }, 100); // Short delay to avoid overlapping

            // Remove flowers after 3 seconds
            setTimeout(() => {
                flower.remove();
            }, 3000);
        }, i * 100); // Staggers the appearance slightly for a natural effect
    }
}


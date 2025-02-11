console.log("JavaScript Loaded Successfully!"); // Debugging check

// 💌 Open Letter Function
function openLetter() {
    console.log("openLetter() Triggered!");
    document.getElementById('letter').style.display = 'block';
    document.getElementById('main-message').style.display = 'none';

    // Typewriter Effect
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

// ⬅️ Return to Main Page Function
function returnToMain() {
    console.log("returnToMain() Triggered!");
    document.getElementById('main-message').style.display = 'block';
    document.getElementById('letter').style.display = 'block';
    document.querySelector('.envelope').style.display = 'block';
}

// 🤗 Virtual Hug Function
function sendVirtualHug() {
    console.log("sendVirtualHug() Triggered!");
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart-animation");
        heart.innerText = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}

// ⌨️ Typewriter Effect
function typeWriterEffect(text, element, speed = 50) {
    let i = 0;
    element.innerHTML = "";
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// ❤️ Floating Hearts When Moving Mouse
document.addEventListener("mousemove", (e) => {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerHTML = "❤️";

    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.opacity = "0";
        heart.style.transform = "translateY(-30px)";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 1000);
});

// ❌ Close Letter Function
function closeLetter() {
    console.log("closeLetter() Triggered!");
    document.getElementById('letter').style.display = 'none';
    document.getElementById('main-message').style.display = 'block';
}

// 🌹 Give Flowers Function
function giveFlowers() {
    console.log("giveFlowers() Triggered!");
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const flower = document.createElement("div");
            flower.classList.add("flower-animation");
            flower.innerText = "🌹";

            flower.style.left = Math.random() * 90 + "vw";
            flower.style.top = "100vh";
            flower.style.fontSize = Math.random() * 40 + 40 + "px";

            document.body.appendChild(flower);

            setTimeout(() => {
                flower.style.top = Math.random() * 50 + "vh";
                flower.style.opacity = "1";
            }, 100);

            setTimeout(() => {
                flower.remove();
            }, 3000);
        }, i * 100);
    }
}

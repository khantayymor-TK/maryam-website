// Elements
const popup = document.getElementById("popup");
const surpriseBtn = document.getElementById("surpriseBtn");
const closeBtn = document.getElementById("close");
const startBtn = document.getElementById("startBtn");

const lockScreen = document.getElementById("lockScreen");
const passwordInput = document.getElementById("password");
const lockBtn = document.getElementById("lockBtn");
const errorMsg = document.getElementById("error");

// Password Functionality
function checkPassword(){
    let pass = passwordInput.value;
    if(pass === "Maryam0607"){
        lockScreen.style.display = "none";
    } else {
        errorMsg.innerHTML = "Wrong Password!";
    }
}

// Password Event Listeners
lockBtn.addEventListener("click", checkPassword);
passwordInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkPassword();
    }
});

// Navigation Functionality
startBtn.addEventListener("click", () => {
    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });
});

// Popup & Hearts Functionality
surpriseBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    createHearts();
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

function createHearts(){
    for(let i=0; i<40; i++){
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random()*100+"vw";
        heart.style.animationDuration = (4+Math.random()*5)+"s";
        heart.style.fontSize = (18+Math.random()*20)+"px";
        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },8000);
    }
}

// Background Twinkles
setInterval(()=>{
    let star = document.createElement("div");
    star.className = "heart";
    star.innerHTML = "✨";
    star.style.left = Math.random()*100+"vw";
    star.style.animationDuration = "7s";
    document.body.appendChild(star);

    setTimeout(()=>{
        star.remove();
    },7000);
},700);

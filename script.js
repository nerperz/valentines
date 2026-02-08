const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const modal = document.getElementById("formModal");
const sendBtn = document.getElementById("sendBtn");

// Stable GIF link
const happyGif = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZ3Y2Ixdm80N2RyeGZ3Y2Ixdm80N2RyeGZ3Y2Ixdm80JnB0PTYmZXA9djFfaW50ZXJuYWxfZ2lmX2J5X2lkJmN0PXM/S9SOfqO8sZInW89I69/giphy.gif";

yesBtn.addEventListener("click", () => {
    question.innerHTML = "YAYYY 💗💗💗💓💓";
    gif.src = happyGif;
    
    setTimeout(() => {
        modal.style.display = "flex";
    }, 1000);
});

// Improved Run-away logic
noBtn.addEventListener('mouseover', () => {
    // Set position to fixed so it stays relative to the whole screen
    noBtn.style.position = "fixed"; 
    
    // Calculate space, avoiding edges
    const maxX = window.innerWidth - noBtn.offsetWidth - 50;
    const maxY = window.innerHeight - noBtn.offsetHeight - 50;

    const randomX = Math.max(50, Math.floor(Math.random() * maxX));
    const randomY = Math.max(50, Math.floor(Math.random() * maxY));

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

sendBtn.addEventListener("click", () => {
    const when = document.getElementById("dateWhen").value;
    const where = document.getElementById("dateWhere").value;
    const time = document.getElementById("dateTime").value;

    if (!when || !where || !time) {
        alert("Wait! Fill out all the details first! ❤️");
        return;
    }

    // CSV Generation
    const csvData = `When,Where,Time\n${when},${where},${time}`;
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'valentine_date.csv';
    a.click();

    modal.style.display = "none";
    
    // THE FINAL INSTRUCTION MESSAGE
    question.innerHTML = "PLS SEND THE FILE TO THE PERSON WHO SENT U THE LINK! 💌";
    alert("DONE! PLEASE SEND THE DOWNLOADED FILE TO THE PERSON WHO SENT U THE LINK!");
});

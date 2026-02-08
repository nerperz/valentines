const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const modal = document.getElementById("formModal");
const sendBtn = document.getElementById("sendBtn");

// 1. When 'Yesss' is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "YAYYY 💗💗💗💓💓";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZ3Y2Ixdm80N2RyeGZ3Y2Ixdm80N2RyeGZ3Y2Ixdm80JnB0PTYmZXA9djFfaW50ZXJuYWxfZ2lmX2J5X2lkJmN0PXM/S9SOfqO8sZInW89I69/giphy.gif";
    
    // Open the form modal after 1 second
    setTimeout(() => {
        modal.style.display = "flex";
    }, 1000);
});

// 2. The 'No' button run-away logic
noBtn.addEventListener('mouseover', () => {
    // Switch to absolute positioning so it can fly anywhere
    noBtn.style.position = "absolute";
    
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// 3. Form Submission (Saves to a CSV/Excel file)
sendBtn.addEventListener("click", () => {
    const when = document.getElementById("dateWhen").value;
    const where = document.getElementById("dateWhere").value;
    const time = document.getElementById("dateTime").value;

    if (!when || !where || !time) {
        alert("Wait! Fill out all the details first! ❤️");
        return;
    }

    // Creating the data for Excel
    const csvData = `When,Where,Time\n${when},${where},${time}`;
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'valentine_date.csv';
    a.click();

    modal.style.display = "none";
    alert("Details 'saved'! (Check your downloads) See you then! 😍");
});

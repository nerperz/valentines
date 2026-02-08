const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".oo-btn");
const noBtn = document.querySelector(".diri-btn");
const modal = document.getElementById("formModal");
const sendBtn = document.getElementById("sendBtn");

// 1. When Yes is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "YAYYY 💗💗💗💓💓";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZ3Y2Ixdm80N2RyeGZ3Y2Ixdm80N2RyeGZ3Y2Ixdm80JnB0PTYmZXA9djFfaW50ZXJuYWxfZ2lmX2J5X2lkJmN0PXM/S9SOfqO8sZInW89I69/giphy.gif";
    
    // Show the popup after a small delay
    setTimeout(() => {
        modal.style.display = "flex";
    }, 1000);
});

// 2. Make the "Diri" button run away
noBtn.addEventListener('mouseover', () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    
    // Calculate boundaries so it doesn't leave the screen
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// 3. Collect form data and "Save to Excel" (CSV)
sendBtn.addEventListener("click", () => {
    const when = document.getElementById("dateWhen").value;
    const where = document.getElementById("dateWhere").value;
    const time = document.getElementById("dateTime").value;

    if (!when || !where || !time) {
        alert("Please fill everything out! ❤️");
        return;
    }

    // Prepare CSV content
    const csvContent = "data:text/csv;charset=utf-8," 
        + "When,Where,Time\n" 
        + `${when},${where},${time}`;

    // Create a hidden link to trigger download
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "date_details.csv");
    document.body.appendChild(link);

    link.click(); // This downloads the file
    
    modal.style.display = "none";
    alert("Details sent! See you then! 😍");
});

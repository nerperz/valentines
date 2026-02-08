const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const modal = document.getElementById("formModal");

const happyGif = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZ3Y2Ixdm80N2RyeGZ3Y2Ixdm80N2RyeGZ3Y2Ixdm80JnB0PTYmZXA9djFfaW50ZXJuYWxfZ2lmX2J5X2lkJmN0PXM/S9SOfqO8sZInW89I69/giphy.gif";

yesBtn.addEventListener("click", () => {
    question.innerHTML = "YAYYY 💗💗💗💓💓";
    gif.src = happyGif;
    
    // Show the modal after a short delay
    setTimeout(() => {
        modal.style.display = "flex";
    }, 1000);
});

noBtn.addEventListener('mouseover', () => {
    // 1. Switch to fixed position ONLY when hovered
    noBtn.style.position = "fixed"; 

    // 2. Get button dimensions
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // 3. Define safe boundaries (padding of 20px from edges)
    const padding = 20;
    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    // 4. Ensure the random number is at least 'padding' so it doesn't hit the left/top edge
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    // 5. Apply the new position
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
// Close modal if user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

sendBtn.addEventListener("click", () => {
    const when = document.getElementById("dateWhen").value;
    const where = document.getElementById("dateWhere").value;
    const time = document.getElementById("dateTime").value;

    if (!when || !where || !time) {
        alert("Wait! Fill out all the details first! ❤️");
        return;
    }

    const csvData = `When,Where,Time\n${when},${where},${time}`;
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'valentine_date.csv';
    a.click();

    modal.style.display = "none";
    question.innerHTML = "SEND THE FILE TO ME! 💌";
    alert("DONE! PLEASE SEND THE DOWNLOADED FILE TO THE PERSON WHO SENT U THE LINK!");
});

document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("current-date");

    const today = new Date();
    const options = { weekday: 'long', month: 'numeric', day: 'numeric' };

    dateElement.textContent = today.toLocaleDateString('en-US', options);
});

document.addEventListener("DOMContentLoaded", () => {
    const today = new Date().getDay(); // 0 = Sunday
    const columns = document.querySelectorAll(".frame > section");
    columns[today]?.classList.add("today");
});
// getDates.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastUpdated").textContent += document.lastModified;
});

document.querySelector('.dark-mode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});
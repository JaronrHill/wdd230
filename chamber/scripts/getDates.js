// getDates.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastUpdated").textContent += document.lastModified;
});


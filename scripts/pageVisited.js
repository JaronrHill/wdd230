window.addEventListener('DOMContentLoaded', (event) => {
    const count = localStorage.getItem('visitCount') || 0;
    const newCount = parseInt(count) + 1;
    localStorage.setItem('visitCount', newCount);
    document.getElementById('visitCounter').textContent = `This page has been visited ${newCount} times.`;
});

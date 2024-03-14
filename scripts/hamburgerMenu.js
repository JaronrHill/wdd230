document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const closeBtn = document.querySelector('.close');
    const navUl = document.querySelector('nav ul');

    hamburger.addEventListener('click', function () {
        navUl.style.display = 'block';
        closeBtn.style.display = 'block';
        hamburger.style.display = 'none';
    });

    closeBtn.addEventListener('click', function () {
        navUl.style.display = 'none';
        closeBtn.style.display = 'none';
        hamburger.style.display = 'block';
    });
});
window.addEventListener('resize', function() {
    const hamburger = document.querySelector('.hamburger');
    const closeBtn = document.querySelector('.close');
    const navUl = document.querySelector('nav ul');

    if (window.innerWidth > 960) {
        hamburger.classList.add('hidden');
        closeBtn.classList.add('hidden');
        navUl.classList.remove('mobile-hidden');
    } else {
        navUl.classList.add('mobile-hidden');
        if (!navUl.classList.contains('menu-open')) {
            hamburger.classList.remove('hidden');
            closeBtn.classList.add('hidden');
        }
    }
});

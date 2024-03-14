document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastUpdated").textContent += document.lastModified;
});

document.querySelector('.dark-mode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

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

document.addEventListener('DOMContentLoaded', function () {
    const background = document.getElementById('particle-background');
    const numberOfParticles = 50;

    for (let i = 0; i < numberOfParticles; i++) {
        let particle = document.createElement('div');
        particle.classList.add('particle');
        background.appendChild(particle);
        setInitialParticlePosition(particle);
    }

    document.addEventListener('mousemove', (e) => {
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            const speed = parseFloat(particle.dataset.speed);
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;
            particle.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    function setInitialParticlePosition(particle) {
        const size = Math.random() * 5 + 5;
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * window.innerWidth}px;
            top: ${Math.random() * window.innerHeight}px;
            position: absolute;
            border-radius: 50%;
            background-color: #8d98c8; 
            opacity: 0.7;
        `;
        particle.dataset.speed = Math.random();
    }
});

const closeButton = document.querySelector('.close');
closeButton.classList.add('visible');
closeButton.classList.remove('visible');

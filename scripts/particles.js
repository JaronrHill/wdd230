document.addEventListener('DOMContentLoaded', function () {
    const background = document.getElementById('particle-background');
    const numberOfParticles = 30;

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
            opacity: 0.3;
        `;
        particle.dataset.speed = Math.random();
    }
});

const closeButton = document.querySelector('.close');
closeButton.classList.add('visible');
closeButton.classList.remove('visible');
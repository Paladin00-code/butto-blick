function parallax(e) {
    let layer = document.querySelector('.layer-bg');
    layer.style.transform = `translate(${e.clientX/50}px, ${e.clientY/50}px)`;
};

document.addEventListener('mousemove', parallax);


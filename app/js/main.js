function parallax(e) {
    let layer = this.querySelector('.layer-bg');
    layer.style.transform = `translate(${e.clientX/50}px, ${e.clientY/50}px)`;
    
    let h1 = this.querySelector('h1');
    h1.style.transform = `rotateZ(${e.clientX-100/150}deg)`;
    
    let button = this.querySelector('.button');
    button.style.transform = `translate(${e.clientX/-150}px, ${e.clientY/-150}px)`;
};

document.addEventListener('mousemove', parallax);


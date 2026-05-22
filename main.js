const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const icon = menuToggle.querySelector('.material-icons');

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');

// menu toggle
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
        icon.textContent = 'close';
    } else {
        icon.textContent = 'menu';
    }
});

menuToggle.setAttribute(
    'aria-expanded',
    nav.classList.contains('active')
);

// lightbox - gallery
if (lightbox) {
    document.querySelectorAll('.gallery-img').forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('active');
        });
    });

    document.querySelector('.lightbox-close').addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) lightbox.classList.remove('active');
    });

}
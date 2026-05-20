const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const icon = menuToggle.querySelector('.material-icons');

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
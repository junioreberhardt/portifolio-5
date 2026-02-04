// Faz o efeito digitação
let typed = new Typed('#typed', {
    strings: ['Desenvolvedor Web Full-Stack', 'HTML, CSS, JS', 'Python, PHP'],
    typeSpeed: 40,
    backSpeed: 20,
    backDelay: 2000,
    showCursor: false,
    loop: true
})

function theme() {
    const body = document.body;
    body.classList.toggle('light')

    const isLight = body.classList.contains('light')
    localStorage.setItem('theme-light', isLight)
}

window.addEventListener('DOMContentLoaded', () => {
    const isLight = localStorage.getItem('theme-light') === 'true'

    if (isLight) {
        document.body.classList.toggle('light')
    }
})

// menu active
const menuItems = document.querySelectorAll('.nav .item');
let currentActive = document.querySelector('.nav .item.active');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        item.classList.add('active');
        currentActive = item;
    });
});

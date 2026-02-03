// Faz o efeito digitação
let typed = new Typed('#typed', {
    strings: ['Full-Stack Desenvolvedor Web', 'HTML, CSS, JS', 'Python, PHP', 'UI/UX'],
    typeSpeed: 50,
    backSpeed: 20,
    backDelay: 3000,
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

document.addEventListener('DOMContentLoaded', function() {
    navegacionFija();
    scrollNav();
})

function navegacionFija() {
    const header = document.querySelector('.barra')
    const sobreCafe = document.querySelector('.nosotros')

    window.addEventListener('scroll', function() {
        if(sobreCafe.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    })
}

function scrollNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a');

    navLinks.forEach( link => {
        link.addEventListener('click', evento => {
            evento.preventDefault();
            const sectionScroll = evento.target.getAttribute('href');
            const section = document.querySelector(sectionScroll);
            
            section.scrollIntoView({behavior: 'smooth'});
        })
    })
}
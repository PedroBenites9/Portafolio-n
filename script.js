
const typed = new Typed('.typed', {
    strings: ['Es un placer conocerte :)'],
    typeSpeed: 90,
    startDelay: 500
});

// const header = document.querySelector('.header__contenedor');
// let prevScrollPos = window.scrollY;

// window.addEventListener('scroll', () => {
//     const currentScrollPos = window.scrollY;
//     console.log('1-->' + prevScrollPos)
//     console.log('2-->' + currentScrollPos)
//     if (prevScrollPos > currentScrollPos) {
//         // Mostrar el encabezado al hacer scroll hacia arriba
//         header.classList.remove('hidden');
//     } else {
//         // Ocultar el encabezado al hacer scroll hacia abajo
//         header.classList.add('hidden');
//     }

//     prevScrollPos = currentScrollPos;
// });

const header = document.querySelector('.header__contenedor');
let prevScrollPos = window.screenY;
let scrolling = false;
let scrollTimeout;

window.addEventListener('scroll', () => {
    prevScrollPos = window.scrollY;

    if (!scrolling) {
        header.classList.add('hidden');
        scrolling = true;
    }

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (scrolling) {
            header.classList.remove('hidden');
            scrolling = false;
        }
    }, 200); // Cambia el valor para ajustar el tiempo de espera después del scroll
});

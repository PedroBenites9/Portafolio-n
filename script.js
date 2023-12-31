// script de animacion maquina de escribir
const typed = new Typed('.typed', {
    strings: ['Es un placer conocerte :)'],
    typeSpeed: 90,
    startDelay: 500
});


// script de animacion para ocultar el nav

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
        header.classList.add('hidden'); //en chatGPT  genero en header.classList.remove en vez de .add, esto daba la animacion inversa (cuando se scrolleaba aparecia el header y cuando parabamos de scrolliar desaparecia el header) 
        scrolling = true;
    }

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (scrolling) {
            header.classList.remove('hidden');
            scrolling = false;
        }
    }, 400); // Cambia el valor para ajustar el tiempo de espera después del scroll
});


// script boton pop-up

window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector(".go-top-container").classList.add("show")
    } else {
        document.querySelector(".go-top-container").classList.remove("show")
    }
}

document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
const carrusel = document.getElementById('gameContainer');
const derC = document.getElementById('botonDerechaChico');
const izqC = document.getElementById('botonIzquierdaChico');
const derG = document.getElementById('botonDerechaG');
const izqG = document.getElementById('botonIzquierdaG');
let categorias = document.getElementById('menuCategoriasul')
let izqCat = document.getElementById('flechaCategIzquierda');
let derCat = document.getElementById('flechaCategDerecha');


derC.addEventListener('click', () => {
    carrusel.style.transform = `translateX(-1050px)`;
});
izqC.addEventListener('click', () => {
    carrusel.style.transform = `translateX(0px)`;
});
/*
derG.addEventListener('click', () => {
    carrusel.style.transform = `translateX(-3050px)`;
});
izqG.addEventListener('click', () => {
    carrusel.style.transform = `translateX(0px)`;
});
*/

derCat.addEventListener('click', () => {
    categorias.style.transform = `translateX(-1000px)`;
});
izqCat.addEventListener('click', () => {
    categorias.style.transform = `translateX(0px)`;
});
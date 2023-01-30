"use strict";

// HEADER Y NAV //

let header = document.querySelector('.header');

const desplazamiento = () => {
    header.classList.toggle('abajo', window.scrollY > 0);
}

window.addEventListener("scroll", desplazamiento);

// CATEGORIAS

let categoriasBtn = document.querySelector('.categorias-btn');
let panelLateral = document.querySelector('.container-panel-lateral');

const desplegarCategorias = () => {
    panelLateral.classList.toggle('active');
}

categoriasBtn.addEventListener('click', desplegarCategorias);
//Selecionando os elementos no DOM
const openModalButton = document.querySelector('#abre-modal');
const closeModalButton = document.querySelector('#fecha-modal');
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

// Usando a função toogle que acrescenta a classe hiden caso ela esteja seleciona ou não


const toogleModal = ()=>{
    modal.classList.toggle('hide');
    fade.classList.toggle('hide');
}

[openModalButton, closeModalButton, fade].forEach((el)=>{
    el.addEventListener('click', ()=> toogleModal());
})
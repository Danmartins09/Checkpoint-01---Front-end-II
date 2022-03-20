const form = document.querySelector("#form");
const removerCard = document.querySelector("#remove");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var image = document.getElementById('image').value;
    var description = document.getElementById('description').value;
    var type = document.getElementById('type').value;
    
    const title = document.getElementById('cards');

    let card = `<div class = "item">
    <h2>${name}</h2>
    <img src="${image}">
    <p class="text">${description}</p>
    <p class="type" id="${type}">${type}</p>
    </div>`;
    
    title.innerHTML = title.innerHTML + card;
    form.reset();

})

removerCard.addEventListener('click', function(e){
    
const title = document.querySelectorAll('#cards .item');
const ultimoItem = title.length -1;
title[ultimoItem].remove() 

})








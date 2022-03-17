const form = document.querySelector("#form");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var image = document.getElementById('image').value;
    var description = document.getElementById('description').value;
    console.log(name);
    console.log(image);
    console.log(description);
    
    const title = document.getElementById('cards');

    let card = `<div class = "item">
    <h2>${name}</h2>
    <img src="${image}">
    <p>${description}</p>
    </div>`;
    
    title.innerHTML = title.innerHTML + card;
    form.reset();

})






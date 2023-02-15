const inputElement = document.getElementById('product');
const buttonAddElement = document.getElementById('add-button');
const ulShoppingListElement = document.getElementById('shopping-list');

buttonAddElement.addEventListener('click', renderList);
window.addEventListener('keyup', (event) => {
    if(event.code === 'Enter') {
        renderList();
    }
});

function renderList() {
    const buttonDeleteElement = document.createElement('button');
    const buttonDeleteElementImg = document.createElement('img');
    buttonDeleteElementImg.setAttribute('src', './assets/Group.svg');
    const liElement = document.createElement('li');
    ulShoppingListElement.appendChild(liElement);
    liElement.appendChild(buttonDeleteElement);
    buttonDeleteElement.append(buttonDeleteElementImg);

    liElement.textContent = inputElement.value;

    inputElement.value = '';

  // Save the shopping list items to local storage
  const shoppingListItems = ulShoppingListElement.innerHTML;
  localStorage.setItem('shoppingListItems', JSON.stringify(shoppingListItems));
}

// Load the shopping list items from local storage
const shoppingListItems = JSON.parse(localStorage.getItem('shoppingListItems'));
if (shoppingListItems) {
  ulShoppingListElement.innerHTML = shoppingListItems;
}




///// Mine /// no chatGPT

/* //get input text element
const inputElement = document.getElementById('product');
//get button element 
const buttonAddElement = document.getElementById('add-button');
//get list 
const ulShoppingListElement = document.getElementById('shopping-list');
//eventListner som lytter på click hendelse på knapp
// lese verdi av input text og legge til i list
buttonAddElement.addEventListener('click', renderList);
window.addEventListener('keyup', (event) => {
    if(event.code === 'Enter') {
        renderList();
    }
});

//eventlistner som lytter på tastatur knapp enter
// lese verdi av input text og legge til i list

function renderList() {
    const buttonDeleteElement = document.createElement('button');
    const buttonDeleteElementImg = document.createElement('img');
    buttonDeleteElementImg.setAttribute('src', './assets/Group.svg');
    const liElement = document.createElement('li');
    ulShoppingListElement.appendChild(liElement);
    liElement.appendChild(buttonDeleteElement);
    buttonDeleteElement.append(buttonDeleteElementImg);

    liElement.textContent = inputElement.value;

    inputElement.value = '';

    
} */
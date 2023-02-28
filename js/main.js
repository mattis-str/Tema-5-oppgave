const inputElement = document.getElementById("product");
const buttonAddElement = document.querySelector(".add-button");
const ulShoppingListElement = document.getElementById("shopping-list");

buttonAddElement.addEventListener("click", renderList);
window.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    renderList();
  }
});

function renderList() {
  if (inputElement.value !== "") {
    const liElement = document.createElement("li");
    liElement.textContent = inputElement.value;
    const buttonDeleteElement = document.createElement("button");
    const buttonDeleteElementImg = document.createElement("img");
    buttonDeleteElementImg.setAttribute("src", "./assets/delete.svg");
    buttonDeleteElement.appendChild(buttonDeleteElementImg);

    liElement.prepend(buttonDeleteElement);
    ulShoppingListElement.appendChild(liElement);

    // line-through
    liElement.addEventListener("click", (event) => {
      liElement.classList.toggle("onClick");
      updateLocalStorage();
    });

    buttonDeleteElement.addEventListener("click", () => {
      ulShoppingListElement.removeChild(liElement);
      updateLocalStorage();
    });

    ulShoppingListElement.appendChild(liElement);

    inputElement.value = "";

    updateLocalStorage();
  };
};

function updateLocalStorage() {
    const listItems = ulShoppingListElement.getElementsByTagName('li');

    const itemList = [];
    const itemStatus = [];
    for (let i = 0; i < listItems.length; i++) {
        itemList.push(listItems[i].textContent);
        itemStatus.push(listItems[i].classList.contains('onClick'));
    };

    const itemListString = JSON.stringify(itemList);
    const itemStatusString = JSON.stringify(itemStatus);
    localStorage.setItem('shoppingList', itemListString);
    localStorage.setItem('shoppingStatus', itemStatusString);
};

function loadShoppingList() {
    const itemListString = localStorage.getItem('shoppingList');
    const itemStatusString = localStorage.getItem('shoppingStatus');
    if (itemListString && itemStatusString){
        const itemList = JSON.parse(itemListString);
        const itemStatus = JSON.parse(itemStatusString);
        for (let i = 0; i < itemList.length; i++) {
            const liElement = document.createElement('li');
            liElement.textContent = itemList[i];
            
            const buttonDeleteElement = document.createElement('button');
            const buttonDeleteElementImg = document.createElement('img');
            buttonDeleteElementImg.setAttribute('src', './assets/delete.svg');
            buttonDeleteElement.appendChild(buttonDeleteElementImg);
            liElement.prepend(buttonDeleteElement);

            if (itemStatus[i]) {
                liElement.classList.add('onClick')
            }

            liElement.addEventListener('click', (event) => {
                liElement.classList.toggle('onClick');
                updateLocalStorage();
                });

                buttonDeleteElement.addEventListener('click', () => {
                    ulShoppingListElement.removeChild(liElement);
                    updateLocalStorage();
                });
            ulShoppingListElement.appendChild(liElement);
        };
    };
};

loadShoppingList();
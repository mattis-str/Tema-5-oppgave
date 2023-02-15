//////CHAT GPT//////

/*
const inputElement = document.getElementById('product');
const buttonAddElement = document.getElementById('add-button');
const ulShoppingListElement = document.getElementById('shopping-list');

buttonAddElement.addEventListener('click', renderList);
window.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
        renderList();
    }
});

function renderList() {
    if (!inputElement.value) return;

    const liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    const buttonDeleteElement = document.createElement('button');
    buttonDeleteElement.innerHTML = '<img src="./assets/delete.svg">';

    liElement.prepend(buttonDeleteElement);
    ulShoppingListElement.appendChild(liElement);
    inputElement.value = '';

    buttonDeleteElement.addEventListener('click', () => {
        ulShoppingListElement.removeChild(liElement);
        removeItemFromOrder(liElement.textContent);
        localStorage.removeItem(liElement.textContent);
    });

    liElement.addEventListener('touchstart', handleTouchStart);
    liElement.addEventListener('touchend', handleTouchEnd);

    addItemToOrder(liElement.textContent);
    localStorage.setItem(liElement.textContent, liElement.textContent);
}

let xDown = null;
let yDown = null;

function handleTouchStart(event) {
    xDown = event.touches[0].clientX;
    yDown = event.touches[0].clientY;
}

function handleTouchEnd(event) {
    if (!xDown || !yDown) {
        return;
    }

    const xUp = event.changedTouches[0].clientX;
    const yUp = event.changedTouches[0].clientY;
    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            ulShoppingListElement.removeChild(event.target);
            removeItemFromOrder(event.target.textContent);
            localStorage.removeItem(event.target.textContent);
        }
    }
    xDown = null;
    yDown = null;
}

function addItemToOrder(item) {
    let order = localStorage.getItem('order');
    if (!order) {
        order = [];
    } else {
        order = JSON.parse(order);
    }
    order.push(item);
    localStorage.setItem('order', JSON.stringify(order));
}

function removeItemFromOrder(item) {
    let order = JSON.parse(localStorage.getItem('order'));
    const index = order.indexOf(item);
    if (index > -1) {
        order.splice(index, 1);
    }
    localStorage.setItem('order', JSON.stringify(order));
    }
    
    window.addEventListener('load', () => {
    const order = JSON.parse(localStorage.getItem('order'));
    if (order) {
    order.forEach((item) => {
    const liElement = document.createElement('li');
    liElement.textContent = item;
    const buttonDeleteElement = document.createElement('button');
    buttonDeleteElement.innerHTML = '<img src="./assets/delete.svg">';
    liElement.prepend(buttonDeleteElement);
    ulShoppingListElement.appendChild(liElement);
            buttonDeleteElement.addEventListener('click', () => {
            ulShoppingListElement.removeChild(liElement);
            removeItemFromOrder(liElement.textContent);
            localStorage.removeItem(liElement.textContent);
        });

        liElement.addEventListener('touchstart', handleTouchStart);
        liElement.addEventListener('touchend', handleTouchEnd);
    });
}
});
*/

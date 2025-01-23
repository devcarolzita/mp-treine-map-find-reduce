import {foods} from '../data.js';

const foodList = document.querySelector('#food-list');
const totalCalories = document.querySelector('#total-calories');
const foodsSelecteds = document.querySelector('#selected-foods');

let itemsSelected = [];
const updateCalories = () => {
  const sumCalories = itemsSelected.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual.calories;
  }, 0);  
  totalCalories.innerHTML = sumCalories;
}

const renderSelecteds = () => {
  foodsSelecteds.innerHTML = '';
  itemsSelected.forEach((item, index) => {
    const divSelected = document.createElement('div');
    divSelected.classList.add('selected-item');

    const titleSelected = document.createElement('p');
    titleSelected.innerText = item.name;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';

    removeButton.addEventListener('click', () => {
      removeItem(index);
    })

    divSelected.appendChild(titleSelected);
    divSelected.appendChild(removeButton);
    foodsSelecteds.appendChild(divSelected);
  })

}

const createFood = (item) => {
  const foodDiv = document.createElement('div');
  foodDiv.classList.add('food-item');

  const img = document.createElement('img');
  img.src = item.image;

  const titleCard = document.createElement('p');
  titleCard.textContent = item.name;

  const calories = document.createElement('p');
  calories.innerHTML = `Calorias <span class="calories"> ${item.calories}</span>`;

  foodDiv.appendChild(img);
  foodDiv.appendChild(titleCard);
  foodDiv.appendChild(calories);

  foodDiv.addEventListener('click', () => {
    console.log('item', item);
    
    renderSoma(item);
  })

  return foodDiv;
}

const renderSoma = (item) => {
  itemsSelected.push(item);
  updateCalories();
  renderSelecteds();
}

const removeItem = (index) => {
  itemsSelected.splice(index, 1);
  updateCalories();
  renderSelecteds();
}

const renderFoods = (itensFoods) => {
  foodList.innerHTML = '';
  const foodElements = itensFoods.map((item) => createFood(item));
  foodList.append(...foodElements);
}

renderFoods(foods);

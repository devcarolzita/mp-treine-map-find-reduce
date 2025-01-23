import {foods} from '../data.js';
const foodGallery = document.querySelector('#food-gallery');
const foodFilter = document.querySelector('#food-filter');

const createFood = (item) => {
  const foodDiv = document.createElement('div');
  foodDiv.classList.add('food-item');

  const img = document.createElement('img');
  img.src = item.image;

  const titleCard = document.createElement('p');
  titleCard.textContent = item.name;

  foodDiv.appendChild(img);
  foodDiv.appendChild(titleCard);

  return foodDiv;
}

const renderFoods = (itensFoods) => {
  foodGallery.innerHTML = '';
  const foodElements = itensFoods.map((item) => createFood(item));
  foodGallery.append(...foodElements);
}

const filteredFoods = (filter) => {
  const resultsFiltered = foods.filter((item) => item.tipo === filter || filter === 'all');
  renderFoods(resultsFiltered);
};

foodFilter.addEventListener('change', (event) => {  
  filteredFoods(event.target.value)
});

renderFoods(foods);

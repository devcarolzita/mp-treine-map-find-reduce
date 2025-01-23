import {drinks} from '../data.js'
const buttonSelect = document.querySelector('#criarDrink');
const resultado = document.querySelector('#resultado');

const createDrinkItem = (item) => {
  const drinkDiv = document.createElement('div');
  drinkDiv.classList.add('drink-item');

  const img = document.createElement('img');
  img.src = item.image;

  const boxTexts = document.createElement('div');
  boxTexts.classList.add('drink-item-box-texts');

  const title = document.createElement('h3');
  title.textContent = item.name;

  const description = document.createElement('p');
  description.textContent = item.description;

  drinkDiv.appendChild(img);
  boxTexts.appendChild(title);
  boxTexts.appendChild(description);
  drinkDiv.appendChild(boxTexts);
  
  return drinkDiv;
}

const findDrinks = () => {
  resultado.innerHTML = '';
  const frutaSelect = document.querySelector('#fruta').value;
  const distilledSelect = document.querySelector('#destilado').value;
  const resposta = drinks.find((item) => {
    return item.fruit === frutaSelect && item.distilled === distilledSelect;
  })
  resultado.appendChild(createDrinkItem(resposta));
}

buttonSelect.addEventListener('click', findDrinks)

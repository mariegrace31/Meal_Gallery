import apiKey from './key.js';
const url = `https://www.themealdb.com/api/json/v1/${apiKey}/lookup.php?i=`;
const popUp = async (mealID) => {
  const requestURL = `${url}${mealID}`;
  const response = await fetch(requestURL);
  const data = await response.json();

  const popWindow = document.createElement('div');
  popWindow.classList.add('window');

  const image = document.createElement('img');
  image.src = data.meals[0].strMealThumb;
  popWindow.appendChild(image);

  const closeIcon = document.createElement('i');
  closeIcon.classList.add('fa', 'fa-times', 'closeIcon');
  popWindow.appendChild(closeIcon);

  const title = document.createElement('h2');
  title.textContent = data.meals[0].strMeal;
  popWindow.appendChild(title);

  const description1 = document.createElement('div');
  description1.classList.add('description1');
  const ul1 = document.createElement('ul');
  const category = document.createElement('li');
  category.textContent = `Category: ${data.meals[0].strCategory}`;
  const area = document.createElement('li');
  area.textContent = `Area: ${data.meals[0].strArea}`;
  ul1.appendChild(category);
  ul1.appendChild(area);
  description1.appendChild(ul1);
  popWindow.appendChild(description1);

  const description2 = document.createElement('div');
  description2.classList.add('description2');
  const ul2 = document.createElement('ul');
  const tags = document.createElement('li');
  tags.textContent = `Tags: ${data.meals[0].strTags}`;
  const instructions = document.createElement('li');
  instructions.textContent = `Description: ${data.meals[0].strInstructions}`;
  ul2.appendChild(tags);
  ul2.appendChild(instructions);
  description2.appendChild(ul2);
  popWindow.appendChild(description2);

  return popWindow;
};

export default popUp;

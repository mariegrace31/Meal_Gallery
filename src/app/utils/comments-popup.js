import apiKey from '../utils/api/key.js';
import {mealsData} from '../utils/api/loadMeals.js';

const url = `https://www.themealdb.com/api/json/v1/${apiKey}/lookup.php?i=`;
const popUp = async () => {
mealsData.forEach( async (meal) => {
  const requestURL = `${url}${meal.id}`;
  const response = await fetch(requestURL);
  const data = await response.json();
  console.log("our data", data.meals[0].strMeal);
  const popWindow = document.createElement('div');

  popWindow.classList.add('window');
  popWindow.innerHTML =
  `
  <img src="${data.meals[0].strMealThumb}" />
  <i class="fa fa-times closeIcon" ></i>
  <h2>${data.meals[0].strMeal}</h2>
  <div class="description1">
  <ul>
  <li>Category:${data.meals[0].strCategory}</li>
  <li>Area:${data.meals[0].strArea}</li>
  </ul>
  </div>
  <div class="description2">
  <ul>
  <li>Tags:${data.meals[0].strTags}</li>
  <li>Description:${data.meals[0].strInstructions}</li>
  </ul>
  </div>
  `;
});
}

export {popUp as default};
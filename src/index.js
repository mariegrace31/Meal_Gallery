// This is the main Javascript file.
import './style.css';
import logo from '../assets/meal-galery-logo.gif';
import { displayAllMeals, updateLikes, mealsData } from './app/utils/api/loadMeals.js';
import homeItemsCounter from './app/utils/homeItemsCounter.js';

const logoBox = document.getElementById('logo');
const logoImg = document.createElement('img');
logoImg.id = 'logo-image';
logoImg.src = logo;
logoBox.appendChild(logoImg);

const totalMeals = document.querySelector('#total-meals');
document.addEventListener('DOMContentLoaded', async () => {
  const count = await homeItemsCounter(mealsData);
  totalMeals.innerHTML = count;
  updateLikes();
});
displayAllMeals();

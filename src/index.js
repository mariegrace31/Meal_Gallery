import './style.css';
import logo from '../assets/meal-galery-logo.gif';
import { displayAllMeals, mealsID } from './app/utils/api/loadMeals.js';
import popUp from './app/utils/api/comments-popup.js';

const logoBox = document.getElementById('logo');
const logoImg = document.createElement('img');
logoImg.id = 'logo-image';
logoImg.src = logo;
logoBox.appendChild(logoImg);

displayAllMeals();


// Add event listeners to "Comments" button
  const buttonTarget = document.querySelector('.meal-list');
  buttonTarget.addEventListener('click', (e) => {
    if (e.target.matches('.button-comment')) {
      console.log('button clicked');
      const mealID = parseInt(e.target.getAttribute('name'), 10);
      const selectedMeal = mealsID.find((meal) => meal.id === mealID);
      if (selectedMeal) {
        console.log(selectedMeal);
        const popWindow = popUp(mealID);
        document.body.appendChild(popWindow);
      }
    }
  });

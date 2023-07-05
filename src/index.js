import './style.css';
import logo from '../assets/meal-galery-logo.gif';
import { displayAllMeals } from './app/utils/api/loadMeals.js';
import popUp from './app/utils/api/comments-popup.js';

const logoBox = document.getElementById('logo');
const logoImg = document.createElement('img');
logoImg.id = 'logo-image';
logoImg.src = logo;
logoBox.appendChild(logoImg);

displayAllMeals();
popUp();

// This is the main Javascript file.
import './style.css';
import logo from '../assets/meal-galery-logo.gif';
import { displayAllMeals } from './app/utils/api/loadMeals.js';
import event from './app/utils/event.js';

const logoBox = document.getElementById('logo');
const logoImg = document.createElement('img');
logoImg.id = 'logo-image';
logoImg.src = logo;
logoBox.appendChild(logoImg);

displayAllMeals();
event();
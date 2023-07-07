import { apiKey } from './key.js';
import addLike from './addLike.js';
import getLike from './getLike.js';

// Identifier of the selected meals
const mealsID = [
  {
    id: 53013,
    category: 'food',
  },
  {
    id: 52951,
    category: 'food',
  },
  {
    id: 52864,
    category: 'food',
  },
  {
    id: 52791,
    category: 'dessert',
  },
  {
    id: 52786,
    category: 'dessert',
  },
  {
    id: 52854,
    category: 'dessert',
  },
];

const url = `https://www.themealdb.com/api/json/v1/${apiKey}/lookup.php?i=`;

const displayAllMeal = async () => {
  const mealListContainer = document.querySelector('.meal-list');

  mealsID.forEach(async (mealID) => {
    // Combine the url with the ID of each meal
    // It creates a new request to fetch
    const requestURL = `${url}${mealID.id}`;
    const response = await fetch(requestURL);
    const data = await response.json();

    const mealName = data.meals[0].strMeal;
    const mealThumb = data.meals[0].strMealThumb;

    const mealListItem = document.createElement('li');

    const mealListItemName = document.createElement('h2');
    mealListItemName.textContent = mealName;

    const mealListItemLikeButton = document.createElement('button');
    mealListItemLikeButton.type = 'submit';
    mealListItemLikeButton.title = 'like meal';
    mealListItemLikeButton.classList.add('fa', 'fa-heart', 'button-like');
    mealListItemLikeButton.title = 'Like meal';
    mealListItemLikeButton.id = mealID.id;
    mealListItemLikeButton.name = `like-${mealID.id}`;
    mealListItemLikeButton.addEventListener('click', () => {
      addLike(mealID.id);
    });

    const mealListItemLikeContainer = document.createElement('div');
    mealListItemLikeContainer.classList.add('like-container');

    const mealListItemComButton = document.createElement('button');
    mealListItemComButton.type = 'button';
    mealListItemComButton.classList = 'button-comment';

    const mealListItemComSpan = document.createElement('span');
    mealListItemComSpan.textContent = 'Comments';

    const mealImage = document.createElement('img');
    mealImage.src = mealThumb;
    mealImage.alt = mealName;

    mealListItemLikeContainer.appendChild(mealListItemLikeButton);
    mealListItemName.appendChild(mealListItemLikeContainer);
    mealListItemComButton.appendChild(mealListItemComSpan);
    mealListItem.appendChild(mealImage);
    mealListItem.appendChild(mealListItemName);
    mealListItem.appendChild(mealListItemComButton);
    mealListContainer.appendChild(mealListItem);
  });
};

const displayLikes = async () => {
  let data = [];
  data = await getLike();
  const likeButtons = document.querySelectorAll('.button-like');

  for (let index = 0; index < data.length; index += 1) {
    const element = data[index];
    likeButtons.forEach((likeButton) => {
      if (element.item_id === parseInt(likeButton.id, 10)) {
        likeButton.setAttribute('data-likes', element.likes);
        likeButton.classList.add('has-like');
      }
    });
  }
};

export { displayAllMeal as displayAllMeals, mealsID as mealsData, displayLikes };

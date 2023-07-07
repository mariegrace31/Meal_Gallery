import apiKey from './key.js';

const url = `https://www.themealdb.com/api/json/v1/${apiKey}/lookup.php?i=`;

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

const displayAllMeals = async () => {
  const mealListContainer = document.querySelector('.meal-list');

  for (const mealID of mealsID) {
    const requestURL = `${url}${mealID.id}`;
    const response = await fetch(requestURL);
    const data = await response.json();

    const mealName = data.meals[0].strMeal;
    const mealThumb = data.meals[0].strMealThumb;

    const mealListItem = document.createElement('li');
    mealListItem.dataset.mealId = mealID.id;

    const mealListItemName = document.createElement('h2');
    mealListItemName.textContent = mealName;

    const mealListItemLikeButton = document.createElement('button');
    mealListItemLikeButton.type = 'button';
    mealListItemLikeButton.classList.add('fa', 'fa-heart', 'button-like');

    const mealListItemComButton = document.createElement('button');
    mealListItemComButton.type = 'button';
    mealListItemComButton.classList.add('button-comment');

    const mealListItemComSpan = document.createElement('span');
    mealListItemComSpan.textContent = 'Comments';

    const mealImage = document.createElement('img');
    mealImage.src = mealThumb;
    mealImage.alt = mealName;

    mealListItemName.appendChild(mealListItemLikeButton);
    mealListItemComButton.appendChild(mealListItemComSpan);
    mealListItem.appendChild(mealImage);
    mealListItem.appendChild(mealListItemName);
    mealListItem.appendChild(mealListItemComButton);
    mealListContainer.appendChild(mealListItem);
  }
};

export { displayAllMeals, mealsID };


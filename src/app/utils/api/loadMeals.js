import apiKey from './key.js';

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
    mealListItemLikeButton.type = 'button';
    mealListItemLikeButton.classList.add('fa', 'fa-heart', 'button-like');

    const mealListItemComButton = document.createElement('button');
    mealListItemComButton.type = 'button';
    mealListItemComButton.classList = 'button-comment';

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
  });
};

export { displayAllMeal as default };

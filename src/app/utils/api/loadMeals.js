import { apiKey } from './key.js';
import addLike from './addLike.js';
import getLike from './getLike.js';

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
    id: 52852,
    category: 'food',
  },
  {
    id: 52907,
    category: 'food',
  },
  {
    id: 52914,
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
  {
    id: 52776,
    category: 'dessert',
  },
  {
    id: 52910,
    category: 'dessert',
  },
  {
    id: 52912,
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
    const mealCategory = data.meals[0].strCategory;
    const mealArea =  data.meals[0].strArea;
    const mealInstructions =  data.meals[0].strInstructions;
    const mealTag =  data.meals[0].strTags;

    const mealListItem = document.createElement('li');
    mealListItem.dataset.mealId = mealID.id;

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
      // eslint-disable-next-line no-use-before-define
      updateLikes();
    });

    const mealListItemLikeContainer = document.createElement('div');
    mealListItemLikeContainer.classList.add('like-container');

    const mealListItemComButton = document.createElement('button');
    mealListItemComButton.type = 'button';
    mealListItemComButton.classList.add('button-comment');

    const mealListItemComSpan = document.createElement('span');
    mealListItemComSpan.textContent = 'Comments';

    const mealImage = document.createElement('img');
    mealImage.src = mealThumb;
    mealImage.alt = mealName;

    // pop pup window
    const popWindow = document.createElement('div');
    popWindow.classList.add('window', 'hide');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('imgContainer');
    popWindow.appendChild(imgContainer);
    const image = document.createElement('img');
    image.src = mealThumb;
    imgContainer.appendChild(image);

    const closeIcon = document.createElement('i');
    closeIcon.classList.add('fa', 'fa-times', 'closeIcon');
    closeIcon.addEventListener('click', () => {
      popWindow.classList.toggle('hide');
    });
    imgContainer.appendChild(closeIcon);

    const title = document.createElement('h2');
    title.textContent = mealName;
    popWindow.appendChild(title);

    const description1 = document.createElement('div');
    description1.classList.add('description1');
    const ul1 = document.createElement('ul');
    const category = document.createElement('li');
    category.textContent = mealCategory;
    const area = document.createElement('li');
    area.textContent = mealArea;
    ul1.appendChild(category);
    ul1.appendChild(area);
    description1.appendChild(ul1);
    popWindow.appendChild(description1);

    const description2 = document.createElement('div');
    description2.classList.add('description2');
    const ul2 = document.createElement('ul');
    const tags = document.createElement('li');
    tags.textContent = mealTag;
    const instructions = document.createElement('li');
    instructions.textContent = mealInstructions;
    ul2.appendChild(tags);
    ul2.appendChild(instructions);
    description2.appendChild(ul2);
    popWindow.appendChild(description2);
    
    mealListItemLikeContainer.appendChild(mealListItemLikeButton);
    mealListItemName.appendChild(mealListItemLikeContainer);
    mealListItemComButton.appendChild(mealListItemComSpan); // I Appended span to the button
    mealListItem.appendChild(mealImage);
    mealListItem.appendChild(mealListItemName);
    mealListItem.appendChild(mealListItemComButton); // Appended comment button here
    mealListItem.appendChild(popWindow);
    mealListContainer.appendChild(mealListItem);
  }
};

const updateLikes = async () => {
  const data = await getLike();
  const likeButtons = document.querySelectorAll('.button-like');

  likeButtons.forEach((likeButton) => {
    const buttonID = parseInt(likeButton.id, 10);
    const likeData = data.find((element) => element.item_id === buttonID);

    if (likeData) {
      likeButton.setAttribute('data-likes', likeData.likes);
      likeButton.classList.add('has-like');
    } else {
      likeButton.setAttribute('data-likes', 0);
      likeButton.classList.remove('has-like');
    }
  });
};

export { displayAllMeals, mealsID, updateLikes };

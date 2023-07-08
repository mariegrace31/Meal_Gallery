import { apiKey } from './key.js';
import addLike from './addLike.js';
import getLike from './getLike.js';
import popUp from './comments-popup.js';
import { addComment, getComments } from './addGetComment.js';
import commentsCounter from '../commentsCounter.js';

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

  mealsID.forEach(async (mealID) => {
    const requestURL = `${url}${mealID.id}`;
    const response = await fetch(requestURL);
    const data = await response.json();

    const mealName = data.meals[0].strMeal;
    const mealThumb = data.meals[0].strMealThumb;
    const mealCategory = data.meals[0].strCategory;
    const mealArea = data.meals[0].strArea;
    const mealInstructions = data.meals[0].strInstructions;

    // Pop-up window
    const popWindow = document.createElement('div');
    popWindow.classList.add('window', 'hide');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('imgContainer');
    const image = document.createElement('img');
    image.src = mealThumb;

    const closeIcon = document.createElement('i');
    closeIcon.classList.add('fa', 'fa-times', 'closeIcon');
    closeIcon.addEventListener('click', () => {
      popWindow.classList.toggle('hide');
    });

    const title = document.createElement('h2');
    title.textContent = mealName;

    const description1 = document.createElement('div');
    description1.classList.add('description1');
    const ul1 = document.createElement('ul');
    const category = document.createElement('li');
    category.textContent = `Category: ${mealCategory}`;
    const area = document.createElement('li');
    area.textContent = `Country: ${mealArea}`;

    const description2 = document.createElement('div');
    description2.classList.add('description2');
    const instructionsTitle = document.createElement('p');
    instructionsTitle.textContent = 'INSTRUCTIONS: ';
    const instructions = document.createElement('p');
    instructions.textContent = mealInstructions;

    const mealDetails = document.createElement('div');
    mealDetails.classList.add('mealDetails');
    const mealComments = document.createElement('div');
    mealComments.classList.add('mealComments');
    const mealCommentsContainer = document.createElement('div');
    mealCommentsContainer.classList.add('mealCommentsContainer');
    const totalComments = await commentsCounter(mealID.id);
    const totalCommentsDiv = document.createElement('div');
    totalCommentsDiv.textContent = `Comments(${totalComments})`;
    // eslint-disable-next-line no-use-before-define
    const commentDiv = await getAllComments(mealID.id);
    mealCommentsContainer.appendChild(totalCommentsDiv);
    mealCommentsContainer.appendChild(commentDiv);
    const commentsForm = document.createElement('form');
    commentsForm.classList.add('commentsForm');
    const inputUsername = document.createElement('input');
    inputUsername.type = 'text';
    inputUsername.name = 'username';
    inputUsername.id = `username${mealID.id}`;
    inputUsername.classList.add('inputField', 'username');
    inputUsername.placeholder = 'Enter your name';
    inputUsername.required = true;
    const inputComments = document.createElement('textarea');
    inputComments.name = 'usercomment';
    inputComments.id = `usercomment${mealID.id}`;
    inputComments.classList.add('inputField', 'usercomment');
    inputComments.placeholder = 'Enter your comments';
    inputComments.required = true;
    const inputSubmitComment = document.createElement('input');
    inputSubmitComment.type = 'submit';
    inputSubmitComment.value = 'Send';
    inputSubmitComment.title = 'Send your comment';

    // Card box
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
    mealListItemComButton.addEventListener('click', () => {
      popUp();
    });

    const mealListItemComSpan = document.createElement('span');
    mealListItemComSpan.textContent = 'Comments';

    const mealImage = document.createElement('img');
    mealImage.src = mealThumb;
    mealImage.alt = mealName;

    commentsForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const username = commentsForm.querySelector('.username');
      const comment = commentsForm.querySelector('.usercomment');
      const usernameValue = username.value;
      const commentValue = comment.value;

      await addComment(mealID.id, usernameValue, commentValue);

      username.value = '';
      comment.value = '';

      const commentsContainer = mealComments.querySelector('.mealCommentsContainer');

      const allComments = await getComments(mealID.id);
      commentsContainer.innerHTML = allComments
        .map((comment) => `<p>${comment.creation_date} - ${comment.username}: ${comment.comment}</p>`)
        .join('');
    });

    ul1.appendChild(category);
    ul1.appendChild(area);
    description1.appendChild(ul1);
    title.appendChild(description1);
    imgContainer.appendChild(closeIcon);
    imgContainer.appendChild(image);
    imgContainer.appendChild(title);
    description2.appendChild(instructionsTitle);
    description2.appendChild(instructions);
    mealDetails.appendChild(imgContainer);
    mealDetails.appendChild(description2);
    commentsForm.appendChild(inputUsername);
    commentsForm.appendChild(inputComments);
    commentsForm.appendChild(inputSubmitComment);
    mealComments.appendChild(mealCommentsContainer);
    mealComments.appendChild(commentsForm);
    popWindow.appendChild(mealDetails);
    popWindow.appendChild(mealComments);
    mealListItemLikeContainer.appendChild(mealListItemLikeButton);
    mealListItemName.appendChild(mealListItemLikeContainer);
    mealListItemComButton.appendChild(mealListItemComSpan);
    mealListItem.appendChild(mealImage);
    mealListItem.appendChild(mealListItemName);
    mealListItem.appendChild(mealListItemComButton);
    mealListItem.appendChild(popWindow);
    mealListContainer.appendChild(mealListItem);
  });
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

const getAllComments = async (id) => {
  const comments = await getComments(id);
  let commentsData = '';
  if (comments) {
    commentsData = comments
      .map((comment) => `<p>${comment.creation_date} - ${comment.username}: ${comment.comment}</p>`)
      .join('');
  }
  const commentDivElement = document.createElement('div');

  commentDivElement.innerHTML = `
    <div class="comments-div">
      ${commentsData}
    </div>
  `;

  return commentDivElement;
};

export { displayAllMeals, mealsID, updateLikes };

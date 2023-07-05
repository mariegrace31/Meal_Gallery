import popUp from './comments-popup.js';


const commentButtons = document.querySelectorAll('.button-comment');
const section = document.querySelector('main');

const event = async () => {
  const openPopup = async (meal) => {
    console.log('comment')
    const popWindow = await popUp(meal);
    popWindow.classList.add('active');
    section.appendChild(popWindow);

    const closeIcons = document.querySelectorAll('.closeIcon');
    closeIcons.forEach((closeIcon) => {
      closeIcon.addEventListener('click', () => {
        const window = closeIcon.parentElement;
        window.classList.remove('active');
        section.removeChild(window);
      });
    });
  };

  commentButtons.forEach((button, index) => {
    button.addEventListener('click', async () => {
      const selectedMeal = mealsData.find((meal) => meal.id === index + 1);
      await openPopup(selectedMeal);
    });
  });
};

export {event as default};

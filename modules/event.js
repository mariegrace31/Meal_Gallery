import popUp from './modules/comments-popup.js';

const event = () => {
  const comment = document.querySelectorAll('#button');
  // change the line bellow
  const section = document.querySelector('')
  const popWindow = popUp();
  for (let i= 0; i < comment.length; i += 1) {
    comment[i].addEventListener('click', () => {
      popWindow[i].classList.add('active');
      section.appendChild(popWindow[i]);
      const close = document.querySelectorAll('.closeIcon');
      close.forEach((btn) => {
        btn.addEventListener('click', () => {
          btn.parentElement.parentElement.parentElement.classList.remove('active');
        });
      });
    });
  }
}

export default event();
import popUp from '../utils/comments-popup.js';
const comment = document.querySelectorAll('.button-comment');
const event = () => {
  // change the line bellow
  const section = document.querySelector('main')
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
export {event as default};
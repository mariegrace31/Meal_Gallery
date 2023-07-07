    // Add event listeners to "Comments" button
    const popUp = () => {
      const commentButtons = document.querySelectorAll('.button-comment');
      commentButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
          const popWindow = event.currentTarget.parentNode.querySelector('.window');
          popWindow.classList.toggle('hide');
        });
      });
      // Hide all popup windows initially
      const popWindows = document.querySelectorAll('.window');
      popWindows.forEach((popWindow) => {
        popWindow.classList.add('hide');
      });
    };
    
    export default popUp;    
    
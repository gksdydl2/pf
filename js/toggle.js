$(document).ready(function(){
    document.querySelector('button').addEventListener('click', (e) => {
        e.currentTarget.firstElementChild.classList.toggle('dark-mode-toggle__icon--moon');
        document.body.classList.toggle('theme--dark');
      });
});
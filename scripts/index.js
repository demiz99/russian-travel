const popup = document.querySelector('.popup')
const closeButton = document.querySelector('.popup__close')
const page = document.querySelector('.page')

document.querySelectorAll('.about-button').forEach((button) => {
  button.addEventListener('click', openPopup);
})

// page.addEventListener('click', (e) => {
//   if (e.target.classList.contains('about-button')) {
//     openPopup();
//   }
// })

function onPressC(e) {
  if (e.code === 'KeyC') {
    closePopup();
  }
}

function openPopup() {
  document.addEventListener('keypress', onPressC)
  popup.classList.add('popup_visible');
}

function closePopup() {
  document.removeEventListener('keyprecc', onPressC)
  popup.classList.remove('popup_visible');
}

closeButton.addEventListener('click', closePopup);

popup.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    closePopup();
  }
});

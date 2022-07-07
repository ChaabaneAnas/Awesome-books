const List = document.querySelector('.List');
const Add = document.querySelector('.Add');
const Contact = document.querySelector('.Contact');

Add.addEventListener('click', () => {
  document.querySelector('.book-list-container').style.display = "none";
  document.querySelector('.input').style.display = "block";
  document.querySelector('.contact').style.display = "none";
})

List.addEventListener('click', () => {
  document.querySelector('.book-list-container').style.display = "block";
  document.querySelector('.input').style.display = "none";
  document.querySelector('.contact').style.display = "none";
  location.reload();
})

Contact.addEventListener('click', () => {
  document.querySelector('.book-list-container').style.display = "none";
  document.querySelector('.input').style.display = "none";
  document.querySelector('.contact').style.display = "block";
})

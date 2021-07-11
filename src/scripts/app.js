const header = document.querySelector('header');
const main = document.querySelector('main');

let positionY = 0;

window.addEventListener('scroll', () => {
  const { scrollY } = window;

  if (scrollY < positionY) {
    header.style.display = 'flex';
  } else if (scrollY > 70) {
    header.style.display = 'none';
  }
  positionY = scrollY;
});


const switchTheme = () => {
  alert('Тема!!!!')
}
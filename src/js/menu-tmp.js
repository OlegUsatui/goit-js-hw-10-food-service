import menuTemplate from '../templates/menu-template.hbs'
import upcomingDishes from '../menu.json'

const menu = document.querySelector('.js-menu');
menu.insertAdjacentHTML('beforeend', menuTemplate(upcomingDishes));


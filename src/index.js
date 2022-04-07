import './styles.css'
import initNav from './navigation';
import initMenu from './menu'
import initHome from './home'

initNav();
initHome();

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', () => {
    removeChilds('.main');
    switch(button.id) {
        case 'home':
            initHome();
            break;
        case 'menu':
            initMenu();
            break;
    };
}));


function removeChilds(name) {
    const element = document.querySelector(name);
    while (element.firstChild) {
        if (element.lastChild.className === 'navigation') return;
        element.removeChild(element.lastChild);
    };
};
import icon1 from './assets/1.png'
import icon2 from './assets/2.png'
import icon3 from './assets/3.png'
import icon4 from './assets/4.png'
import icon5 from './assets/5.png'
import icon6 from './assets/6.jpg'
import icon7 from './assets/7.jpg'
import icon8 from './assets/8.png'
import icon9 from './assets/9.png'

export default function initMenu () {
    document.body.style.overflow = 'scroll';
    const main = document.querySelector('.main');
    
    const menu = document.createElement('div');
    menu.className = 'menu';

    main.appendChild(menu);

    const containers = [];
    const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9];

    const container = document.createElement('div');
    container.className = 'container';

    for (let n = 0; n <= 8; n++) {
        containers[n] = container.cloneNode(true);
        containers[n].style.backgroundImage = `url(${icons[n]})`;
        menu.appendChild(containers[n]);
    };
};
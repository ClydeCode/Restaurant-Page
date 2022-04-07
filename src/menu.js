export default function initMenu () {
    const main = document.querySelector('.main');
    
    const menu = document.createElement('div');
    menu.className = 'menu';

    main.appendChild(menu);

    const container = document.createElement('div');
    container.className = 'container';

    for (let n = 0; n <= 8; n++) menu.appendChild(container.cloneNode(true));
}
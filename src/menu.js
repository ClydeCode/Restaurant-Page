export default function initMenu () {
    const main = document.querySelector('.main');
    
    const menu = document.createElement('div');
    menu.className = 'menu';

    main.appendChild(menu);

    const container = document.createElement('div');
    container.className = 'container';

    for (let n = 0; n <= 8; n++) menu.appendChild(container.cloneNode(true));

    const navigation = document.createElement('div');
    navigation.className = 'navigation';

    main.appendChild(navigation);

    const homeBtn = document.createElement('button');
    homeBtn.innerHTML = 'Home';
    homeBtn.id = 'home';

    const menuBtn = document.createElement('button');
    menuBtn.innerHTML = 'Menu';
    menuBtn.id = 'menu';

    const contactBtn = document.createElement('button');
    contactBtn.innerHTML = 'Contact';
    contactBtn.id = 'contact';

    navigation.appendChild(homeBtn);
    navigation.appendChild(menuBtn);
    navigation.appendChild(contactBtn);

}
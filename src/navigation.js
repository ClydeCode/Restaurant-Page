export default function initNav() {
    const main = document.querySelector('.main');

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
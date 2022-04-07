export default function initHome () {
    const main = document.querySelector('.main');

    const container = document.createElement('div');
    container.className = 'container-news';

    const container_title = document.createElement('div');
    container_title.className = 'container-title';
    container_title.innerHTML = 'News';

    const container_text = document.createElement('div');
    container_text.className = 'container-text';
    container_text.innerHTML = 'We came up with a new recipe!';

    main.appendChild(container);
    container.appendChild(container_title);
    container.appendChild(container_text);

    const stripes = document.createElement('div');
    stripes.className = 'stripes';

    const stripe = document.createElement('div');
    stripe.className = 'stripe';

    main.appendChild(stripes);

    for (let n = 0; n <= 2; n++) stripes.appendChild(stripe.cloneNode(true));

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
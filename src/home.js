import icon from './assets/5.png'

export default function initHome () {
    document.body.style.overflow = 'hidden';
    const main = document.querySelector('.main');

    const container = document.createElement('div');
    container.className = 'container-news';

    const container_title = document.createElement('div');
    container_title.className = 'container-title';
    container_title.innerHTML = 'News';

    const container_text = document.createElement('div');
    container_text.className = 'container-text';
    container_text.innerHTML = 'We came up with a new recipe!';

    const image = new Image();
    image.src = icon;

    main.appendChild(container);
    container.appendChild(container_title);
    container.appendChild(container_text);
    container.appendChild(image);

    const stripes = document.createElement('div');
    stripes.className = 'stripes';

    const stripe = document.createElement('div');
    stripe.className = 'stripe';

    main.appendChild(stripes);

    for (let n = 0; n <= 2; n++) stripes.appendChild(stripe.cloneNode(true));
}
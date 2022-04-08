export default function initContact() {
    document.body.style.overflow = 'hidden';
    const main = document.querySelector('.main');

    const container = document.createElement('div');
    container.className = 'container-news';

    const container_title = document.createElement('div');
    container_title.className = 'container-title';
    container_title.innerHTML = 'Contact';

    const container_text_1 = document.createElement('div');
    container_text_1.className = 'container-text';
    container_text_1.innerHTML = 'Phone number: (555) 555-1234';

    const container_text_2 = document.createElement('div');
    container_text_2.className = 'container-text';
    container_text_2.innerHTML = 'Email: italypizza@gmail.com';

    const container_text_3 = document.createElement('div');
    container_text_3.className = 'container-text';
    container_text_3.innerHTML = 'Our address: Italy, Italiano 22200';

    main.appendChild(container);
    container.appendChild(container_title);
    container.appendChild(container_text_1);
    container.appendChild(container_text_2);
    container.appendChild(container_text_3);

    const stripes = document.createElement('div');
    stripes.className = 'stripes';

    const stripe = document.createElement('div');
    stripe.className = 'stripe';

    main.appendChild(stripes);

    for (let n = 0; n <= 2; n++) stripes.appendChild(stripe.cloneNode(true));
}
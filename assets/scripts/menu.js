import { menu } from '../db/store.js';

function mountMenu(targetId = 'menu') {
    const element = document.getElementById(targetId);
    if (!element) return;

    element.innerHTML = menu.map((item) => `
        <li>
            <a class="menu__item" href="#${item.id}" data-nav-link="${item.id}">
                <span class="menu__number">${item.number}</span>
                <span>${item.label}</span>
            </a>
        </li>
    `).join('');
}

export { mountMenu };

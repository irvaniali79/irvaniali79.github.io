import { posts } from '../db/store.js';

function mountPostList(targetId = 'posts', filter = 'all') {
    const element = document.getElementById(targetId);
    if (!element) return;

    const visible = filter === 'all' ? posts : posts.filter((post) => post.category === filter);
    element.innerHTML = visible.map((post) => `
        <li class="post" data-category="${post.category}">
            <div class="post__meta">
                <span>${post.label}</span>
                <span>${post.date}</span>
            </div>
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <span class="post__arrow">↗</span>
        </li>
    `).join('');
}

export { mountPostList };

import { capabilities, experience, personal, projects } from '../db/store.js';
import { mountMenu } from './menu.js';
import { mountPostList } from './post.js';

const iconMap = {
    violet: '◈',
    blue: '⌁',
    green: '◇',
    amber: '✦',
    slate: '□'
};

function escapeHtml(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

function renderExperience() {
    const root = document.getElementById('experience-list');
    if (!root) return;

    root.innerHTML = experience.map((job, index) => `
        <article class="timeline-item">
            <div class="timeline-rail"><span>${String(index + 1).padStart(2, '0')}</span></div>
            <div class="timeline-card">
                <div class="timeline-card__head">
                    <div>
                        <p class="eyebrow">${escapeHtml(job.org)}</p>
                        <h3>${escapeHtml(job.role)}</h3>
                    </div>
                    <span class="timeline-card__date">${escapeHtml(job.date)}</span>
                </div>
                <div class="timeline-card__location">${escapeHtml(job.location)}</div>
                <p class="timeline-card__summary">${escapeHtml(job.summary)}</p>
                <ul>
                    ${job.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
                </ul>
                <div class="tag-row">${job.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
            </div>
        </article>
    `).join('');
}

function renderCapabilities() {
    const root = document.getElementById('capabilities-list');
    if (!root) return;

    root.innerHTML = capabilities.map((capability) => `
        <article class="capability-card capability-card--${escapeHtml(capability.accent)}">
            <div class="capability-card__top">
                <span class="capability-card__index">${escapeHtml(capability.index)}</span>
                <span class="capability-card__icon">${iconMap[capability.accent] ?? '•'}</span>
            </div>
            <p class="eyebrow">Capability layer</p>
            <h3>${escapeHtml(capability.title)}</h3>
            <p class="capability-card__lead">${escapeHtml(capability.lead)}</p>
            <div class="chip-cloud">
                ${capability.items.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}
            </div>
        </article>
    `).join('');
}


function renderPersonal() {
    const root = document.getElementById('personal-list');
    if (!root) return;

    const interests = personal.interests.map((interest) => `
        <span><strong>${escapeHtml(interest.label)}</strong><small>${interest.items.map(escapeHtml).join(' · ')}</small></span>
    `).join('');

    root.innerHTML = `
        <article class="personal-card personal-card--wide">
            <p class="eyebrow">Education</p>
            <h3>Computer Engineering</h3>
            <p>${escapeHtml(personal.education.replace('B.Sc. in ', 'B.Sc. · '))}</p>
        </article>
        <article class="personal-card">
            <p class="eyebrow">Languages</p>
            <div class="personal-list">
                ${personal.languages.map((language) => {
                    const [name, level] = language.split(' · ');
                    return `<span>${escapeHtml(name)} <small>${escapeHtml(level ?? '')}</small></span>`;
                }).join('')}
            </div>
        </article>
        <article class="personal-card">
            <p class="eyebrow">Current status</p>
            <p>${escapeHtml(personal.status)}</p>
        </article>
        <article class="personal-card personal-card--wide">
            <p class="eyebrow">Away from the editor</p>
            <div class="interest-grid">${interests}</div>
        </article>
    `;
}

function renderProjects() {
    const root = document.getElementById('projects-list');
    if (!root) return;

    root.innerHTML = projects.map((project, index) => `
        <article class="project-card">
            <div class="project-card__top">
                <span class="project-card__code">${escapeHtml(project.code)}</span>
                <span class="project-card__count">0${index + 1}</span>
            </div>
            <p class="project-card__meta">${escapeHtml(project.meta)}</p>
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(project.description)}</p>
            <div class="tag-row">${project.stack.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
        </article>
    `).join('');
}

function setupFilters() {
    document.querySelectorAll('[data-filter]').forEach((button) => {
        button.addEventListener('click', () => {
            document.querySelectorAll('[data-filter]').forEach((item) => item.classList.remove('is-active'));
            button.classList.add('is-active');
            mountPostList('posts', button.dataset.filter);
        });
    });
}

function setupMobileNav() {
    const toggle = document.querySelector('[data-menu-toggle]');
    const nav = document.querySelector('[data-nav]');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('[data-nav-link]').forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
}

function setupScrollSpy() {
    const sections = [...document.querySelectorAll('.section-anchor')];
    const links = [...document.querySelectorAll('[data-nav-link]')];
    if (!('IntersectionObserver' in window) || sections.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            links.forEach((link) => link.classList.toggle('is-active', link.dataset.navLink === entry.target.id));
        });
    }, { rootMargin: '-30% 0px -55% 0px', threshold: 0 });

    sections.forEach((section) => observer.observe(section));
}

function setupPrint() {
    const button = document.querySelector('[data-print]');
    button?.addEventListener('click', () => window.print());
}

function boot() {
    mountMenu();
    mountPostList();
    renderExperience();
    renderCapabilities();
    renderPersonal();
    renderProjects();
    setupFilters();
    setupMobileNav();
    setupScrollSpy();
    setupPrint();
}

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', boot);
}

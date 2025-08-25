document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app-container');
    let appData = {};

    const fetch_data = async () => {
        try {
            const response = await fetch('./assets/dummy-data.json');
            if (!response.ok) throw new Error('Network response was not ok');
            appData = await response.json();
            router();
        } catch (error) {
            appContainer.innerHTML = `<p class="error">Failed to load content. Please try again later.</p>`;
            console.error('Fetch error:', error);
        }
    };

    const renderHome = () => {
        const introHTML = `<div class="intro-section"><p>${appData.introduction}</p></div>`;
        const cardsHTML = appData.sections.map(section => `
            <a href="#${section.id}" class="topic-card">
                <h2>${section.title}</h2>
                <p>${section.summary}</p>
            </a>
        `).join('');

        appContainer.innerHTML = `
            ${introHTML}
            <div class="card-grid">${cardsHTML}</div>
        `;
    };

    const renderDetail = (sectionId) => {
        const section = appData.sections.find(s => s.id === sectionId);
        if (!section) {
            renderHome(); // Or render a 404 page
            return;
        }

        const contentHTML = section.content.map(sub => `
            <div class="sub-section">
                <h3>${sub.subtitle}</h3>
                <p>${sub.text.replace(/\n/g, '</p><p>')}</p>
            </div>
        `).join('');

        appContainer.innerHTML = `
            <div class="detail-view">
                <a href="#" class="back-link">&larr; Back to Overview</a>
                <h1>${section.title}</h1>
                ${contentHTML}
            </div>
        `;
    };

    const router = () => {
        const hash = window.location.hash.substring(1);
        if (hash) {
            renderDetail(hash);
        } else {
            renderHome();
        }
        window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', router);
    fetch_data();
});

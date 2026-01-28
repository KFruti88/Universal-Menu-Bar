(function() {
    // Domain Check for Our Flora
    const isTestEnv = window.location.hostname.includes('github.io') || window.location.hostname.includes('localhost');
    const isOurFloraTest = isTestEnv && window.location.search.includes('site=ourflora');

    if (!isOurFloraTest && window.location.hostname !== 'ourflora.com') {
        return;
    }

    // Towns of Clay County, IL (Shared with SMLC)
    const towns = [
        { name: 'Flora', url: '#' },
        { name: 'Louisville', url: '#' },
        { name: 'Clay City', url: '#' },
        { name: 'Xenia', url: '#' },
        { name: 'Sailor Springs', url: '#' }
    ];

    function injectTownButtons() {
        const container = document.getElementById('site-custom-container');
        if (!container) {
            setTimeout(injectTownButtons, 50);
            return;
        }
        container.innerHTML = ''; // Clear existing

        towns.forEach(town => {
            const btn = document.createElement('a');
            btn.href = town.url;
            btn.className = 'glossy-town-btn';
            btn.innerText = town.name;
            container.appendChild(btn);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectTownButtons);
    } else {
        injectTownButtons();
    }
})();
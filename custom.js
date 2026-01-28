(function() {
    // List of streamers for the menu
    const streamers = [
        { name: 'Werewolf3788', url: 'https://www.twitch.tv/Werewolf3788' },
        { name: 'Phoenix_Darkfire', url: 'https://www.twitch.tv/Phoenix_Darkfire' },
        { name: 'Darkwing6942', url: 'https://www.twitch.tv/Darkwing6942' },
        { name: 'MJOLNIR', url: 'https://www.twitch.tv/MJOLNIR' },
        { name: 'Raymystro', url: 'https://www.twitch.tv/Raymystro' }
    ];

    function injectStreamerButtons() {
        const container = document.getElementById('site-custom-container');
        
        // Wait for the container if it hasn't loaded yet
        if (!container) {
            setTimeout(injectStreamerButtons, 50);
            return;
        }

        streamers.forEach(streamer => {
            const btn = document.createElement('a');
            btn.href = streamer.url;
            btn.target = '_blank';
            btn.className = 'streamer-btn';
            btn.innerText = streamer.name;
            container.appendChild(btn);
        });
    }

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectStreamerButtons);
    } else {
        injectStreamerButtons();
    }
})();
(function() {
    // 1. Create the Menu Bar Container (Nav)
    const menuBar = document.createElement('nav');
    menuBar.id = 'universal-nav-container';
    
    // Apply base styles (93% width, centered, flexbox)
    // Note: Background color is handled by Day/Night logic below
    menuBar.style.cssText = "width: 93%; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 10px; flex-wrap: wrap; font-family: sans-serif; transition: background-color 3s ease-in-out;";

    // 2. Create the Amazon "Today's Deals" Button
    const amazonLink = document.createElement('a');
    amazonLink.href = 'https://www.amazon.com/gp/goldbox?tag=todaysdealswerewolf-20';
    amazonLink.target = '_blank';
    amazonLink.innerText = "Today's Deals";
    amazonLink.id = 'amazon-deal-btn';
    
    // Apply specific Amazon styles from request
    amazonLink.style.cssText = "background: #ff9900; color: #000; padding: 5px 10px; border-radius: 4px; font-weight: bold; text-decoration: none;";
    
    // Append Amazon link to the bar (Locked to the left)
    menuBar.appendChild(amazonLink);

    // 3. Create Container for Links (Flora, Support Local, Custom)
    const navLinks = document.createElement('div');
    navLinks.id = 'nav-links';
    navLinks.style.display = 'flex';
    navLinks.style.alignItems = 'center';
    navLinks.style.flexWrap = 'wrap';

    // Add Static Site Links
    const sites = [
        { name: 'Flora', url: 'https://ourflora.com' },
        { name: 'Support Local', url: 'https://supportmylocalcommunity.com' }
    ];

    sites.forEach(site => {
        const link = document.createElement('a');
        link.href = site.url;
        link.innerText = site.name;
        link.style.cssText = "color: inherit; margin-left: 15px; text-decoration: none;";
        navLinks.appendChild(link);
    });

    // 4. Create a container for site-specific custom buttons (Werewolf Streamers)
    const customContainer = document.createElement('div');
    customContainer.id = 'site-custom-container';
    customContainer.style.cssText = "margin-left: 15px; display: flex; gap: 10px;";
    navLinks.appendChild(customContainer);

    menuBar.appendChild(navLinks);

    // Inject into the DOM
    document.body.prepend(menuBar);

    // 5. Time Zone Logic (New York / Eastern Time)
    function updateBackground() {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            hour12: false,
            timeZone: 'America/New_York'
        });
        
        const hour = parseInt(formatter.format(now));
        const isDay = hour >= 6 && hour < 18;

        if (isDay) {
            menuBar.classList.remove('night-mode');
            menuBar.classList.add('day-mode');
            menuBar.style.color = '#333'; // Dark text for day
        } else {
            menuBar.classList.remove('day-mode');
            menuBar.classList.add('night-mode');
            menuBar.style.color = '#fff'; // White text for night
        }
    }

    // Initial check
    updateBackground();

    // Check every minute to update if the sun sets/rises while user is on page
    setInterval(updateBackground, 60000);
})();
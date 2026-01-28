(function() {
    // 1. Create the Menu Bar Container
    const menuBar = document.createElement('div');
    menuBar.id = 'universal-menu-bar';

    // 2. Create the Amazon "Today's Deals" Button
    const amazonLink = document.createElement('a');
    amazonLink.href = 'https://www.amazon.com/gp/goldbox?tag=todaysdealswerewolf-20';
    amazonLink.target = '_blank';
    amazonLink.innerText = "Today's Deals";
    amazonLink.id = 'amazon-deal-btn';
    amazonLink.title = "Check out Today's Deals on Amazon";
    
    // Append Amazon link to the bar (Locked to the left)
    menuBar.appendChild(amazonLink);

    // 3. Create a container for site-specific custom buttons
    const customContainer = document.createElement('div');
    customContainer.id = 'site-custom-container';
    menuBar.appendChild(customContainer);

    // Inject into the DOM
    document.body.prepend(menuBar);

    // 4. Time Zone Logic (New York / Eastern Time)
    function updateBackground() {
        // Get current time in New York
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            hour12: false,
            timeZone: 'America/New_York'
        });
        
        const hour = parseInt(formatter.format(now));

        // Define Day vs Night (Approximate Sunrise/Sunset)
        // Day: 6 AM (6) to 6 PM (18)
        const isDay = hour >= 6 && hour < 18;

        if (isDay) {
            menuBar.classList.remove('night-mode');
            menuBar.classList.add('day-mode');
        } else {
            menuBar.classList.remove('day-mode');
            menuBar.classList.add('night-mode');
        }
    }

    // Initial check
    updateBackground();

    // Check every minute to update if the sun sets/rises while user is on page
    setInterval(updateBackground, 60000);
})();
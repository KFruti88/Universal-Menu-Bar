/**
 * UNIVERSAL SYNC MASTER LOGIC - LOCKED VERSION 1.05
 * Standards: 90% Width, No-Cache, Full-Code Mandate [cite: 2026-01-26]
 * Mandatory: Amazon Link on all sites, Site-specific buttons associated correctly. [cite: 2026-01-27]
 */

const version = "1.05";
const cacheBuster = "?v=" + version;

// MANDATORY: Amazon Today's Deals Tracking [cite: 2026-01-27]
const permanentLinks = [
    { title: "📦 Amazon Today's Deals", url: "https://www.amazon.com/gp/goldbox?tag=werewolf3788-20" }
];

// MANDATORY: Werewolf-specific links [cite: 2026-01-28]
const werewolfGamerLinks = [
    { title: 'Werewolf Main', url: 'https://werewolf.ourflora.com/' },
    { title: 'Werewolf Home', url: 'https://werewolf.ourflora.com/home/werewolf/' },
    { title: 'Phoenix Darkfire', url: 'https://werewolf.ourflora.com/phoenix-darkfire/' },
    { title: 'DarkwingDog', url: 'https://werewolf.ourflora.com/darkwingdog/' },
    { title: 'MjolnirGaming', url: 'https://werewolf.ourflora.com/home/mjolnirgaming/' },
    { title: 'Ray', url: 'https://werewolf.ourflora.com/home/ray-2/' }
];

const sharedLinks = [
    { title: 'SMLC Home', url: 'https://www.supportmylocalcommunity.com/' },
    { title: 'Clay City', url: 'https://supportmylocalcommunity.com/clay-city/' },
    { title: 'Our Flora', url: 'https://ourflora.com/' },
    { title: 'Profile', url: 'https://ourflora.com/profile/' }
];

const siteConfigs = {
    werewolf: {
        folder: 'werewolf',
        manualLinks: werewolfGamerLinks,
        buttonClass: 'glossy-town-btn'
    },
    supportmylocalcommunity: {
        folder: 'supportmylocalcommunity',
        manualLinks: sharedLinks,
        buttonClass: 'glossy-town-btn'
    },
    ourflora: {
        folder: 'ourflora',
        manualLinks: sharedLinks,
        buttonClass: 'glossy-town-btn'
    }
};

async function syncAll() {
    const nav = document.getElementById('universal-nav');
    const customContainer = document.getElementById('site-custom-container');
    const searchParams = new URLSearchParams(window.location.search);
    
    // Default to 'werewolf' to ensure gamer links show by default [cite: 2026-01-28]
    const siteKey = searchParams.get('site') || 'werewolf';
    const siteConfig = siteConfigs[siteKey];

    // 1. Render Mandatory Amazon Link + Site Specific Links
    if (customContainer && siteConfig) {
        customContainer.innerHTML = '';
        
        // Load custom CSS for the specific site [cite: 2026-01-26]
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `https://kfruti88.github.io/Clay-County-All/${siteConfig.folder}/custom.css${cacheBuster}`;
        document.head.appendChild(link);
        
        // Combine Mandatory Amazon Link with the site's specific buttons [cite: 2026-01-27]
        const allButtons = [...permanentLinks, ...siteConfig.manualLinks];

        allButtons.forEach(item => {
            const btn = document.createElement('a');
            btn.href = item.url;
            btn.innerText = item.title;
            btn.className = siteConfig.buttonClass;
            customContainer.appendChild(btn);
        });
    }

    // 2. Universal Navigation (Mixing menus from all sites) [cite: 2026-01-28]
    let navHTML = '';
    const endpoints = [
        "https://werewolf.ourflora.com/wp-json/menus/v1/menus/primary",
        "https://ourflora.com/wp-json/menus/v1/menus/primary",
        "https://supportmylocalcommunity.com/wp-json/menus/v1/menus/primary"
    ];

    for (const url of endpoints) {
        try {
            const res = await fetch(url + cacheBuster.replace('v=', 'cb='));
            const data = await res.json();
            if (data.items) {
                data.items.forEach(item => {
                    navHTML += `<li><a href="${item.url}">${item.title}</a></li>`;
                });
            }
        } catch (e) { console.error("Universal Sync: Endpoint error at " + url); }
    }
    if (nav) nav.innerHTML = navHTML;
}

document.addEventListener('DOMContentLoaded', syncAll);

/**
 * UNIVERSAL SYNC MASTER LOGIC - LOCKED VERSION 1.04
 * Standards: 90% Width, No-Cache, Full-Code Mandate [cite: 2026-01-26]
 * MANDATORY: Site-specific links must only show on their associated sites.
 */

const version = "1.04";
const cacheBuster = "?v=" + version;

const PACK_CONFIG = {
    endpoints: [
        "https://werewolf.ourflora.com/wp-json/menus/v1/menus/primary",
        "https://ourflora.com/wp-json/menus/v1/menus/primary",
        "https://supportmylocalcommunity.com/wp-json/menus/v1/menus/primary"
    ]
};

// MANDATORY: Werewolf-specific links
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
        apiUrl: PACK_CONFIG.endpoints[0],
        manualLinks: werewolfGamerLinks,
        buttonClass: 'glossy-town-btn'
    },
    supportmylocalcommunity: {
        folder: 'supportmylocalcommunity',
        apiUrl: PACK_CONFIG.endpoints[2],
        manualLinks: sharedLinks,
        buttonClass: 'glossy-town-btn'
    },
    ourflora: {
        folder: 'ourflora',
        apiUrl: PACK_CONFIG.endpoints[1],
        manualLinks: sharedLinks,
        buttonClass: 'glossy-town-btn'
    }
};

async function syncAll() {
    const nav = document.getElementById('universal-nav');
    const customContainer = document.getElementById('site-custom-container');
    const searchParams = new URLSearchParams(window.location.search);
    
    // Logic defaults to 'werewolf' to ensure gamer links show by default [cite: 2026-01-28]
    const siteKey = searchParams.get('site') || 'werewolf';
    const siteConfig = siteConfigs[siteKey];

    // 1. Universal Nav (Combines all 3 community sites)
    let navHTML = '';
    for (const url of PACK_CONFIG.endpoints) {
        try {
            const res = await fetch(url + cacheBuster.replace('v=', 'cb='));
            const data = await res.json();
            if (data.items) {
                data.items.forEach(item => {
                    navHTML += `<li><a href="${item.url}">${item.title}</a></li>`;
                });
            }
        } catch (e) { console.error("Universal Sync: Endpoint unreachable: " + url); }
    }
    if (nav) nav.innerHTML = navHTML;

    // 2. Site-Specific Links (Mandatory Association)
    if (siteConfig && customContainer) {
        customContainer.innerHTML = '';
        
        // CSS Cache-Busting Versioning [cite: 2026-01-26]
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `https://kfruti88.github.io/Clay-County-All/${siteConfig.folder}/custom.css${cacheBuster}`;
        document.head.appendChild(link);

        // Render buttons only for the active site
        siteConfig.manualLinks.forEach(item => {
            const btn = document.createElement('a');
            btn.href = item.url;
            btn.innerText = item.title;
            btn.className = siteConfig.buttonClass;
            customContainer.appendChild(btn);
        });
    }
}

document.addEventListener('DOMContentLoaded', syncAll);

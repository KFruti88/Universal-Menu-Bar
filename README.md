🐺 Werewolf & Pack Community Project Standards
📌 Core Site Mapping
Main Site: https://ourflora.com

Community Hub: https://supportmylocalcommunity.com

Gamer Portal: https://werewolf.ourflora.com

🎮 The Pack (Gamer Page IDs)
Use these IDs when fetching via the WordPress REST API to ensure only the "Pack of 5" is displayed:

Werewolf3788: ID 4

DarkwingDog (TJ): ID 5

Phoenix_Darkfire (Seth): ID 6

Raymystyro: ID 7

MjolnirGaming (Michael): ID 17

🔗 Universal Menu Configuration
To sync the universal menu, the script must fetch from the following endpoints:

Endpoint 1: https://ourflora.com/wp-json/menus/v1/menus/primary

Endpoint 2: https://supportmylocalcommunity.com/wp-json/menus/v1/menus/primary

Endpoint 3: https://werewolf.ourflora.com/wp-json/menus/v1/menus/primary

Note: All menus must be assigned to the "Primary" display location in the WordPress dashboard.

🛠️ Technical Requirements
Container Width: Default to 90% for all screen sizes.

Responsiveness: Elements must stack vertically on mobile/smaller screens.

Cache Busting: Always include "No-Cache" meta tags in <head> and use versioning (e.g., style.css?v=1.01).

Amazon Affiliate: Always use Tracking ID werewolf3788-20.

Locations for Everyone
Kevin "Werewolf" live in zipcode 32609
Scott (boss) - {Is not a Gamer} lives in 62401
Ray lives in 62839
TJ "DarkwingDog", "Darkterror" lives in 50276
Seth "Phoenix Darkfire" lives in 62838
Michael " MjolnirGaming" lives in 62040

## ⚙️ 5. GitHub Priority: Compatibility & Caching
> **MANDATORY:** These rules override all other styling or logic requests.

- **Universal Rendering:** - Master container MUST be `width: 90%; margin: auto;`.
    - Height MUST be `height: auto;` to scale with the dynamic row count of the Google Sheet.
    - Use `display: grid;` with `auto-fit` to ensure cards never overlap or run off-screen on any device (iPhone to 4K TV).
  
- **Priority Caching (Cache Busting):**
    - Every `<link>` for CSS and every `<script>` tag MUST include a version query string.
    - Format: `filename.extension?v=[TIMESTAMP_OR_VERSION]` (e.g., `style.css?v=1.24`).
    - **Reason:** This ensures GitHub Pages reflects real-time changes without requiring a manual cache clear.

- **Cross-Browser Standards:**
    - Use `-webkit-` prefixes for Safari/iOS compatibility.
    - No fixed pixel heights on cards; use `min-height` or `flex-grow` to allow content to breathe.


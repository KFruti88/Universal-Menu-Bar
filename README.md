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

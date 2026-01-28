# Universal-Menu-Bar

A universal menu bar for `supportmylocalcommunity.com`, `ourflora.com`, and `werewolf.ourflora.com`.

## Features
1.  **Amazon Today's Deals**: A locked, eye-catching button on the left side linking to Amazon deals.
2.  **Dynamic Background**: Syncs with New York (Eastern) Time.
    *   **Daytime (6AM - 6PM)**: Light Blue background.
    *   **Nighttime (6PM - 6AM)**: Black background.
    *   **Transition**: Smooth fade matching sunrise/sunset feel.
3.  **Customization**: Separate folders for each website to apply specific styles.

## Installation

Include the core files and the specific site customization file in your HTML `<head>` or body.

### Example for Support My Local Community:
```html
<link rel="stylesheet" href="/universal-menu.css">
<link rel="stylesheet" href="/supportmylocalcommunity/custom.css">
<script src="/universal-menu.js"></script>
```

### Example for Our Flora:
```html
<link rel="stylesheet" href="/universal-menu.css">
<link rel="stylesheet" href="/ourflora/custom.css">
<script src="/universal-menu.js"></script>
```

## File Structure
*   `universal-menu.js`: Core logic (Time sync, HTML injection).
*   `universal-menu.css`: Core styling (Amazon button, transitions).
*   `[site-folder]/custom.css`: Site-specific overrides.
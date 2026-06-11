// Wait for the entire webpage to load before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // Logic for the "Close this tab" button
    const closeButton = document.getElementById('closeBtn');
    
    if (closeButton) {
        closeButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevents the page from refreshing
            window.close(); // Attempts to close the browser tab
        });
    }

    // You can add more interactive features here later!
    // For example: image modal popups, dark mode toggles, etc.
});
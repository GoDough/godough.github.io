document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;

    const openAboutUsLink = document.getElementById('openAboutus');
    const aboutUsOverlay = document.getElementById('aboutusOverlay');
    const closeAboutUsLink = document.getElementById('closeAboutus');
    const openFranchiseLink = document.getElementById('openFranchise');
    const franchiseOverlay = document.getElementById('franchiseOverlay');
    const closeFranchiseLink = document.getElementById('closeFranchise');

    const overlays = [aboutUsOverlay, franchiseOverlay];

    function closeAllOverlays() {
        overlays.forEach(overlay => {
            overlay.style.bottom = '-150%';
        });
        body.classList.remove('no-scroll');
    }

    openFranchiseLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        closeAllOverlays(); // Close any open overlays
        franchiseOverlay.style.bottom = '0';
        body.classList.add('no-scroll'); // Add class to body to hide overflow
    });

    closeFranchiseLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        franchiseOverlay.style.bottom = '-150%';
        body.classList.remove('no-scroll'); // Remove class from body to allow scrolling
    });

    openAboutUsLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        closeAllOverlays(); // Close any open overlays
        aboutUsOverlay.style.bottom = '0';
        body.classList.add('no-scroll'); // Add class to body to hide overflow
    });

    closeAboutUsLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        aboutUsOverlay.style.bottom = '-150%';
        body.classList.remove('no-scroll'); // Remove class from body to allow scrolling
    });

    // Close the overlay if the user clicks outside the content area
    overlays.forEach(overlay => {
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) {
                overlay.style.bottom = '-150%';
                body.classList.remove('no-scroll'); // Remove class from body to allow scrolling
            }
        });
    });
});

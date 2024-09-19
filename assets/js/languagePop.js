document.getElementById('languagePop').addEventListener('click', function() {
    const menu = document.querySelector('.topMainNavInsideSecMidMenu');
    const languagePop = this; // Reference to the clicked element

    // Toggle the class for the menu
    menu.classList.toggle('topMainNavInsideSecMidMenuActive');

    // Check if the clicked element has the class 'topMainNavInsideSecMidLink'
    if (languagePop.classList.contains('topMainNavInsideSecMidLink')) {
        languagePop.classList.toggle('topMainNavInsideSecMidLinkActive');
    }
});

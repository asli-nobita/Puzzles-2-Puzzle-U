/* CLIENT SIDE FRONTEND LOGIC */     

const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menu-toggle'); 
const closeMenu = document.getElementById('close-menu'); 

// Toggle menu open/close
const openMenu = () => {
    menu.classList.remove('w-0');
    menu.classList.add('w-1/2'); // Open menu
    closeMenu.classList.remove('rotate-45'); // Reset cross rotation
};

// Function to close menu
const closeMenuFunc = () => {
    menu.classList.add('w-0');
    menu.classList.remove('w-1/2'); // Close menu
    closeMenu.classList.add('rotate-45'); // Rotate cross button
};

// Toggle menu
menuToggle.addEventListener('click', openMenu);

// Close menu with close button
closeMenu.addEventListener('click', closeMenuFunc);

// Close menu and remove blur when clicking outside
window.addEventListener('click', (e) => {
    if (
        !menu.contains(e.target) &&
        e.target !== menuToggle &&
        e.target !== closeMenu
    ) {
        closeMenuFunc();
    }
});

const detailsForm = document.getElementById('details-form');
const responseForm = document.getElementById('response-form');

    // Handle first form submission and move to the next slide
    detailsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        if (name && email) {
            const carousel = new bootstrap.Carousel('#carouselExample');
            carousel.next(); // Move to the next slide
        }
    });

    // Handle response submission
    responseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const response = document.getElementById('response').value;

        if (response) {
            alert(`Response Submitted: ${response}`);
        }
    });

// When user submits the answer
/* ADD YOUR IMPLEMENTATION HERE */

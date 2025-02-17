
document.addEventListener('DOMContentLoaded', function () {

    console.log("DOM Loaded");

    const viewProjectsButton = document.querySelector('.cta-btn');
    
    if (viewProjectsButton) {
        console.log("Button Found!");

        viewProjectsButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default anchor link behavior

            // Debug: Log when button is clicked
            console.log("Button Clicked");

            const targetSection = document.getElementById('portfolio');
            
            if (targetSection) {
                console.log("Target Section Found!");
                targetSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.log("Target section not found.");
            }
        });
    } else {
        console.log("Button Not Found");
    }
});
// Get the button and contact section
const toggleContactBtn = document.getElementById('toggleContact');
const contactSection = document.getElementById('contact');

toggleContactBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    // Add the 'show' class to the contact section to display it
    contactSection.classList.add('show');
    contactSection.classList.remove('hidden');  // Make sure hidden class is removed

    // Scroll to the contact section smoothly
    contactSection.scrollIntoView({ behavior: 'smooth' });
});


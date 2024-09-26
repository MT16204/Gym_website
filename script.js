document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('#menu-icon'); // Added quotes for ID selector
    let navbar = document.querySelector('.navbar'); // Added quotes for class selector

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    };

    // Typing Text Code
    const typed = new Typed('.multiple-text', { // Added '.' for class selector
        strings: ['Physical Fitness', 'Weight Lifting', 'Strength Training', 'Fat Loss', 'Boxing', 'Running'],
        typeSpeed: 50,
        backSpeed: 60,
        backDelay: 1000,
        loop: true,
    });
});

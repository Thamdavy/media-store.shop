const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Dark/Light mode toggle
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Responsive menu toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdown.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        dropdownMenu.classList.toggle('show');
    });

    // Close the dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});
// Select all dropdown toggle links
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Close any other open dropdowns
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            if (dropdown !== this.parentElement) {
                dropdown.classList.remove('active');
            }
        });

        // Toggle the current dropdown
        const parentDropdown = this.parentElement;
        parentDropdown.classList.toggle('active');
    });
});
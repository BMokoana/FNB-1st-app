const menuToggle = document.getElementById('menutoggle');
const dropdown = document.getElementById('dropdown');

menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    dropdown.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    if (!menuToggle.contains(event.target) && !dropdown.contains(event.target)) {
        menuToggle.classList.remove('active');
        dropdown.classList.remove('active');
    }
});
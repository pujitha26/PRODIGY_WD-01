window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'cadetblue'; // Darker background color
    } else {
        navbar.style.backgroundColor = 'cadetblue'; // Original background color
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn');
    const navbar = document.querySelector('.navbar');

    btn.addEventListener('click', function() {
        window.location.href = 'about.html';
    });

    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

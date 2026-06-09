
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
        mobileMenu.classList.remove('translate-x-full');
        menuBtn.innerHTML = '<i data-lucide="x" class="text-(--green-dark) w-6 h-6"></i>';
    } else {
        mobileMenu.classList.add('translate-x-full');
        menuBtn.innerHTML = '<i data-lucide="menu" class="text-(--green-dark) w-6 h-6"></i>';
    }
    lucide.createIcons();
});

// Close menu when a link is clicked
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuOpen = false;
        mobileMenu.classList.add('translate-x-full');
        menuBtn.innerHTML = '<i data-lucide="menu" class="text-(--green-dark) w-6 h-6"></i>';
        lucide.createIcons();
    });
});

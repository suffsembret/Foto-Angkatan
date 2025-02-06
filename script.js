// Inisialisasi AOS
AOS.init();

// Inisialisasi Lucide Icons
lucide.createIcons();

// Navbar berubah saat scroll
window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0, 51, 102, 0.9)";
    } else {
        navbar.style.background = "rgba(0, 51, 102, 0.7)";
    }
});

// Efek hover glow untuk border kotak
document.querySelectorAll('.box').forEach((box) => {
    box.addEventListener("mouseenter", () => {
        box.style.boxShadow = "0px 0px 15px rgba(255, 221, 87, 0.8)";
    });
    box.addEventListener("mouseleave", () => {
        box.style.boxShadow = "none";
    });
});
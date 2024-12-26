const icerik = {
    // ... mevcut içerikler ...
    
    // Resim galerisi için yeni bölüm
    galeri: [
        {
            url: "proje1.jpg",
            baslik: "Proje 1"
        },
        {
            url: "proje2.jpg",
            baslik: "Proje 2"
        },
        {
            url: "proje3.jpg",
            baslik: "Proje 3"
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // ... mevcut kodlar ...

    // Galeri bölümü için yeni kod
    const galeriHTML = `
        <section id="galeri">
            <h1>Projelerim</h1>
            <div class="image-gallery">
                ${icerik.galeri.map(resim => `
                    <img 
                        src="${resim.url}" 
                        alt="${resim.baslik}" 
                        class="gallery-image"
                        title="${resim.baslik}"
                    >
                `).join('')}
            </div>
        </section>
    `;

    // Galeri bölümünü main elementinin içine ekle
    document.querySelector('main').insertAdjacentHTML('beforeend', galeriHTML);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});

// Sayfa yüklendiğinde animasyon
document.addEventListener('DOMContentLoaded', function() {
    const profileContainer = document.querySelector('.profile-container');
    profileContainer.style.opacity = '0';
    setTimeout(() => {
        profileContainer.style.transition = 'opacity 1s ease-in-out';
        profileContainer.style.opacity = '1';
    }, 300);
});
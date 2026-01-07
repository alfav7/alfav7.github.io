document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Fungsi Dark Mode
    const modeBtn = document.getElementById('modeBtn');
    if (modeBtn) {
        modeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            modeBtn.innerText = document.body.classList.contains('dark-mode') ? "Mode Terang" : "Mode Gelap";
        });
    }

    // 2. Fungsi Slider untuk semua Project Card
    const allCards = document.querySelectorAll('.project-card');

    allCards.forEach(card => {
        const slides = card.querySelectorAll('.slide');
        const nextBtn = card.querySelector('.next-btn');
        const prevBtn = card.querySelector('.prev-btn');
        let currentIdx = 0;

        if (slides.length > 0 && nextBtn && prevBtn) {
            
            function changeSlide(step) {
                // Logika Tambahan: Reset/Stop video jika slide yang aktif adalah iframe
                const currentSlide = slides[currentIdx];
                const iframe = currentSlide.querySelector('iframe');
                if (iframe) {
                    const src = iframe.src;
                    iframe.src = ""; // Menghapus src sejenak untuk mematikan suara
                    iframe.src = src; // Mengembalikan src agar video bisa diputar lagi nanti
                }

                // Hapus class aktif dari slide lama
                slides[currentIdx].classList.remove('active');
                
                // Hitung index baru
                currentIdx = (currentIdx + step + slides.length) % slides.length;
                
                // Tambah class aktif ke slide baru
                slides[currentIdx].classList.add('active');
            }

            // Event listener tombol navigasi
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault(); // Mencegah perilaku default browser
                changeSlide(1);
            });

            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                changeSlide(-1);
            });
        }
    });
});
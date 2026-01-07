document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Fungsi Dark Mode
    const modeBtn = document.getElementById('modeBtn');
    modeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        modeBtn.innerText = document.body.classList.contains('dark-mode') ? "Mode Terang" : "Mode Gelap";
    });

    // 2. Fungsi Slider untuk semua Project Card
    const allCards = document.querySelectorAll('.project-card');

    allCards.forEach(card => {
        const slides = card.querySelectorAll('.slide');
        const nextBtn = card.querySelector('.next-btn');
        const prevBtn = card.querySelector('.prev-btn');
        let currentIdx = 0;

        // Pastikan kartu punya gambar
        if (slides.length > 0) {
            function changeSlide(step) {
                // Hapus aktif yang sekarang
                slides[currentIdx].classList.remove('active');
                
                // Hitung index baru
                currentIdx = (currentIdx + step + slides.length) % slides.length;
                
                // Tambah aktif ke yang baru
                slides[currentIdx].classList.add('active');
            }

            nextBtn.addEventListener('click', () => changeSlide(1));
            prevBtn.addEventListener('click', () => changeSlide(-1));
        }
    });
});
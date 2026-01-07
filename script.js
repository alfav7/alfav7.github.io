const btn = document.getElementById('btnGanti');
btn.addEventListener('click', () => {
    document.body.style.backgroundColor = 
        `hsl(${Math.random() * 360}, 70%, 80%)`;
});
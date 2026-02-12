document.addEventListener('DOMContentLoaded', () => {
    // Работа с модальным окном
    const modal = document.getElementById('modalForm');
    const openBtn = document.getElementById('openForm');
    const closeBtn = document.querySelector('.close');

    openBtn.onclick = () => modal.style.display = "block";
    closeBtn.onclick = () => modal.style.display = "none";
    
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }

    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

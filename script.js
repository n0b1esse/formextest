document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modalForm');
    const btn = document.getElementById('openForm');
    const span = document.getElementsByClassName('close')[0];
    const form = document.getElementById('leadForm');

    // Открытие модалки
    btn.onclick = () => modal.style.display = "block";

    // Закрытие
    span.onclick = () => modal.style.display = "none";
    window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }

    // Обработка формы (ТЗ: Email + CRM)
    form.onsubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        console.log("Данные подготовлены для отправки:", data);

        // Имитация отправки
        try {
            // Здесь в будущем будет fetch('/api/crm')
            alert("Заявка принята! Копия отправлена на info@formex.kg");
            modal.style.display = "none";
            form.reset();
        } catch (error) {
            console.error("Ошибка CRM, дублирование на Email...", error);
        }
    };
});

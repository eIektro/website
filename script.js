document.addEventListener('DOMContentLoaded', () => {
    const toggleLink = document.getElementById('toggle-theme');
    const body = document.body;

    // Tema tercihini yerel depolamada kontrol et
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        toggleLink.textContent = 'Açık';
    }

    toggleLink.addEventListener('click', (e) => {
        e.preventDefault();
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            toggleLink.textContent = 'Açık';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleLink.textContent = 'Koyu';
            localStorage.setItem('theme', 'light');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const lastModified = document.getElementById('lastModified');
    const currentyear = document.getElementById('currentyear');
    const currentDate = new Date();
    lastModified.textContent = currentDate.toLocaleDateString();
    currentyear.textContent = currentDate.toLocaleDateString();
});


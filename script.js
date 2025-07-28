const form = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    })
    .then(() => {
        formMessage.textContent = 'Terima kasih! Pesan Anda telah terkirim.';
        formMessage.style.opacity = '1';
        form.reset();
        setTimeout(() => { formMessage.style.opacity = '0'; }, 4000);
    })
    .catch(error => {
        formMessage.textContent = 'Gagal mengirim: ' + error;
        formMessage.style.opacity = '1';
    });
});
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const classTime = document.getElementById('class-time').value;
    const formMessage = document.getElementById('form-message');

    formMessage.classList.remove('success', 'error', 'hidden');
    formMessage.textContent = '';

    if (!name || !email || !classTime) {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.classList.add('error');
        return;
    }

    console.log('Form submitted:', { name, email, classTime });

    formMessage.textContent = 'Thank you for signing up! We’ll email you a confirmation.';
    formMessage.classList.add('success');

    this.reset();
});
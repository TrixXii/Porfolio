const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    sendEmail();
});

function sendEmail() {
    const recipient = 'beatrizmunozabellan@gmail.com';
    const subject = `Nuevo mensaje de ${nameInput.value}`;
    const body = `Nombre: ${nameInput.value}\nCorreo electrónico: ${emailInput.value}\nMensaje: ${messageInput.value}`;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
}
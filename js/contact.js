// const form = document.querySelector('form');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const messageInput = document.getElementById('message');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     sendEmail();
// });

// function sendEmail() {
//     const recipient = 'beatrizmunozabellan@gmail.com';
//     const subject = `Nuevo mensaje de ${nameInput.value}`;
//     const body = `Nombre: ${nameInput.value}\nCorreo electrónico: ${emailInput.value}\nMensaje: ${messageInput.value}`;
//     const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
//     window.location.href = mailtoUrl;
// }

const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    sendEmail();
});

function sendEmail() {
    const CLIENT_ID = '545688304674-nkhe52usbif2pa8ap0t26upu7md441q1.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyB7QD5qywbnkTkkBogtDVqsYiWekdo1QL4';
    const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];
    const SCOPES = 'https://www.googleapis.com/auth/gmail.send';

    gapi.load('client:auth2', initClient);

    function initClient() {
        gapi.client.init({
            Key: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        }).then(function() {
            const to = 'beatrizmunozabellan@gmail.com';
            const subject = `Nuevo mensaje de ${nameInput.value}`;
            const body = `Nombre: ${nameInput.value}\nCorreo electrónico: ${emailInput.value}\nMensaje: ${messageInput.value}`;
            const message = [
                `To: ${to}`,
                'Content-Type: text/html; charset=utf-8',
                'MIME-Version: 1.0',
                `Subject: ${subject}`,
                '',
                `${body}`
            ].join('\n');

            const base64EncodedEmail = btoa(message);

            const request = gapi.client.gmail.users.messages.send({
                'userId': 'me',
                'resource': {
                    'raw': base64EncodedEmail
                }
            });

            request.execute(function(response) {
                console.log(response);
                alert('Email sent successfully!');
            });
        });
    }
}
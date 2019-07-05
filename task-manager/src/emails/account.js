const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'lindakt16@gmail.com',
        subject: 'Welcome to the task app!',
        text: `Welcome to the app, ${name}! Let me know if you have any issues or questions.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'lindakt16@gmail.com',
        subject: 'Sorry to see you go!',
        html: `<h1 style="color: red">We're sorry to see you go, ${name}!</h1><p>Thanks for giving us a shot. If there's something we could have done better, please let us know so we can improve.</p>`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}
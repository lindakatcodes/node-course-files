const socket = io();

// HTML Elements - $ used to signify it's a DOM element (convention)
const $messageForm = document.querySelector('#textForm');
const $messageFormInput = $messageForm.querySelector('input');
const $messageFormButton = $messageForm.querySelector('button');
const $locationButton = document.querySelector('#sendLocation');
const $messages = document.querySelector('#messages');

// Templates
const messageTemplate = document.querySelector('#message-template').innerHTML
const locationTemplate = document.querySelector('#location-template').innerHTML


socket.on('message', (message) => {
    console.log(message)
    const html = Mustache.render(messageTemplate, {
        message: message.text,
        createdAt: moment(message.createdAt).format('h:mm A')
    });
    $messages.insertAdjacentHTML('beforeend', html);
})

socket.on('locationMessage', (location) => {
    console.log(location);
    const html = Mustache.render(locationTemplate, {
        url: location.url,
        createdAt: moment(location.createdAt).format('h:mm A')
    });
    $messages.insertAdjacentHTML('beforeend', html);
})

$messageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // disable form once submitted, prevent accidental resubmits
    $messageFormButton.setAttribute('disabled', 'disabled');
    
    const message = e.target.elements.formMessage.value;
    socket.emit('sendMessage', message, (error) => {
        // re-enable button click functionality, clear input, reset focus
        $messageFormButton.removeAttribute('disabled');
        $messageFormInput.value = '';
        $messageFormInput.focus();

        if (error) {
            return console.log(error)
        }
        console.log('The message was delivered!')
    });
})

$locationButton.addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser.')
    }

    $locationButton.setAttribute('disabled', 'disabled');

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, () => {
            console.log('Location shared!')
            $locationButton.removeAttribute('disabled');
        })
    })
})
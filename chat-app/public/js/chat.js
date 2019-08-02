const socket = io();

// HTML Elements - $ used to signify it's a DOM element (convention)
const $messageForm = document.querySelector('#textForm');
const $messageFormInput = $messageForm.querySelector('input');
const $messageFormButton = $messageForm.querySelector('button');
const $locationButton = document.querySelector('#sendLocation');


socket.on('message', (welcome) => {
    console.log(welcome)
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
        return alert('Gelocation is not supported by your browser.')
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
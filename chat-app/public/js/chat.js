const socket = io();

// HTML Elements - $ used to signify it's a DOM element (convention)
const $messageForm = document.querySelector('#textForm');
const $messageFormInput = $messageForm.querySelector('input');
const $messageFormButton = $messageForm.querySelector('button');
const $locationButton = document.querySelector('#sendLocation');
const $messages = document.querySelector('#messages');
const $sidebar = document.querySelector('#sidebar');

// Templates
const messageTemplate = document.querySelector('#message-template').innerHTML
const locationTemplate = document.querySelector('#location-template').innerHTML
const sidebarTemplate = document.querySelector('#sidebar-template').innerHTML

// Options
const { username, room } = Qs.parse(location.search, { ignoreQueryPrefix: true })

const autoscroll = () => {
    // grab the newest message
    const $newMessage = $messages.lastElementChild;

    // what's the height of the newest message, including margin?
    const newMessageStyles = getComputedStyle($newMessage);
    const newMessageMargin = parseInt(newMessageStyles.marginBottom);
    const newMessageHeight = $newMessage.offsetHeight + newMessageMargin;

    // store our site's visible height & the height of the messages container
    const visibleHeight = $messages.offsetHeight;
    const containerHeight = $messages.scrollHeight;

    // check where the scroll bar currently is - can only grab the top of the bar, so adding visible height gets us more accurate data
    const scrollOffset = $messages.scrollTop + visibleHeight;

    // if our messages container - new message is smaller than the offset, we're at the bottom and want to autoscroll
    if (containerHeight - newMessageHeight <= scrollOffset) {
        $messages.scrollTop = $messages.scrollHeight;
    }
}

// template rendering
socket.on('message', (message) => {
    const html = Mustache.render(messageTemplate, {
        username: message.username,
        message: message.text,
        createdAt: moment(message.createdAt).format('h:mm A')
    });
    $messages.insertAdjacentHTML('beforeend', html);
    autoscroll();
})

socket.on('locationMessage', (locationData) => {
    const html = Mustache.render(locationTemplate, {
        username: locationData.username,
        url: locationData.url,
        createdAt: moment(locationData.createdAt).format('h:mm A')
    });
    $messages.insertAdjacentHTML('beforeend', html);
    autoscroll();
})

socket.on('roomData', ({ room, users }) => {
    const html = Mustache.render(sidebarTemplate, {
        room,
        users
    })
    $sidebar.innerHTML = html;
})

// client listeners for actions
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

socket.emit('join', { username, room }, (error) => {
    if (error) {
        alert(error)
        location.href = '/'
    }
})
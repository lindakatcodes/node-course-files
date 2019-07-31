const socket = io();

socket.on('message', (welcome) => {
    console.log(welcome)
})

document.querySelector('#textForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const message = e.target.elements.formMessage.value;
    socket.emit('sendMessage', message);
})
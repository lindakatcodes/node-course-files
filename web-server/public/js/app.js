console.log('Client side JS loaded')

const weatherForm = document.querySelector('form');
const searchText = document.querySelector('input');
const firstp = document.querySelector('#firstP');
const secondp = document.querySelector('#secondP');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = searchText.value;

    firstp.textContent = 'Loading...';
    secondp.textContent = '';

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            firstp.textContent = data.error;
        } else {
            firstp.textContent = data.location;
            secondp.textContent = data.forecast;
        }
    })
})
})
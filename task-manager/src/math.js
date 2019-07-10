const calctip = (total, percent = .25) => total + (total * percent);

const fahrenheitToCelsius = (temp) => {
    return (temp - 32) / 1.8
}

const celsiusToFahrenheit = (temp) => {
    return (temp * 1.8) + 32
}

module.exports = {
    calctip,
    fahrenheitToCelsius,
    celsiusToFahrenheit
}
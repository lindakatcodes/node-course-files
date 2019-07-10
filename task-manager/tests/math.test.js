const { calctip, fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math');

test('tip calculates correctly', () => {
    const total = calctip(10, 0.3);
    expect(total).toBe(13)

    // if (total !== 13) {
    //     throw new Error (`total tip should be 13, got ${total}`);
    // }
})

test('test default tip', () => {
    const total = calctip(10);
    expect(total).toBe(12.5);
})

test('should convert 32f to 0c', () => {
    const ftoc = fahrenheitToCelsius(32);
    expect(ftoc).toBe(0);
})

test('should convert 0c to 32f', () => {
    const ctof = celsiusToFahrenheit(0);
    expect(ctof).toBe(32);
})
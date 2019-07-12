const { calctip, fahrenheitToCelsius, celsiusToFahrenheit, add } = require('../src/math');

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

// test('Async test demo', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     },2000)
// })

test('Should add two numbers', (done) => {
    add(2,3).then((sum) => {
        expect(sum).toBe(5)
        done()
    })
})

test('async function', async () => {
    const sum = await add(10, 22)
    expect(sum).toBe(32)
})
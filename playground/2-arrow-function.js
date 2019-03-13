// const square = function (x) {
//     return x * x;
// }

// const square = (x) => {
//     return x * x;
// }

// const square = (x) => x * x;

// console.log(square(3));

// const event = {
//     name: 'Birthday party',
//     printGuestList: function () {
//         console.log('Guest list for ' + this.name);
//     }
// }

// Arrow functions don't work quite the same way as regular when this is involved
const event = {
    name: 'Birthday party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    // Method definition function - has access to this keyword
    printGuestList() {
        console.log('Guest list for ' + this.name);

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList();
// Object Property shorthand
const name = "Linda";
const userAge = 36;

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user);

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// can use below on object to create vars for object properties
// can also rename var, or set default value if prop doesn't exist
// const {label:productLabel, stock, rating = 5} = product;

// console.log(productLabel);
// console.log(stock);
// console.log(rating);

// can also destructure in function call, if you know obj is being passed

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock);
}

transaction('order', product);
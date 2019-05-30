require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5ce61aa4b141fb088c0e8361').then(() => {
//     console.log('Item deleted');
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false })
    return count;
}

deleteTaskAndCount('5ce61a57b49ab101183e35c9').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
import events from "events";
const eventEmitter = new events.EventEmitter();

function randomNumber() {
  return Math.floor(Math.random() * 20);
}
function addRandomNumbers(rand1, rand2) {
  let result = rand1 + rand2;
  console.log(+result);
}
eventEmitter.on("Sum", addRandomNumbers);
// eventEmitter.emit("Sum", randomNumber(), randomNumber());
// console.log(randomNumber())


function listenerOne() {
    console.log("First listener")
}

function listenerTwo() {
    console.log('Second listener')
}

eventEmitter.on('listenerOne', listenerOne)
eventEmitter.on('listenerOne', listenerTwo)

// eventEmitter.emit('listenerOne')

const connectHandler = function connected() {
    console.log("connected successfully")
    eventEmitter.emit('data-received')
}

eventEmitter.on('connection', connectHandler)

eventEmitter.on('data-received', function() {
    console.log('data received successfully')
})

// eventEmitter.emit('connection')
// console.log('Program ended')

// setImmediate(() => {
//     console.log("1st immediate")
// })
// setImmediate(() => {
//     console.log("2nd immediate")
// })
// process.nextTick(() => {
//     console.log("1st process")
// })
// process.nextTick(() => {
//     console.log("2nd process")
// })

// setTimeout(() => {
//     console.log("Hello world")
// }, 3000)


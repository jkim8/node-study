const EventEmitter = require('events')
const emitter = new EventEmitter()

const callback1 = (args) => {
    console.log('first callback - ', args);
}

emitter.on('juno', callback1)

emitter.on('juno', (args) => {
    console.log('second callback - ', args);
})

emitter.emit('juno', {message: 1})
emitter.emit('juno', {message: 2})
emitter.removeListener('juno', callback1)
// emitter.removeAllListeners()
emitter.emit('juno', {message: 3})
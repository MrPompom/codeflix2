function empty() {
    const EventEmitter =  require('event')
    EventEmitter.on('hi', () => {
        console.log("hi dear friends")
    })
    EventEmitter.emit('hi')
}

function withArgs(names) {
    const EventEmitter = require('event')
    EventEmitter.on('newFeloow', names => {
        console.log("Here comes's anew pirate ->>", names)
    })
    EventEmitter.emit('newFellow')
}

module.export = empty()
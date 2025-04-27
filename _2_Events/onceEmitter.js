// Event Create
const myEventOnce = require('events');
const { eventNames } = require('process');

// Emitter Create
const myEmitterOnce = new myEventOnce.EventEmitter()

// Event Name
const eventSpecialDatabase = 'database';

// Event Listener
myEmitterOnce.once(eventSpecialDatabase, () => {
    console.log('Once Database Working')
});

// Event Trigger
myEmitterOnce.emit(eventSpecialDatabase);


//setInterval

setInterval(() => {
    myEmitterOnce.emit(eventSpecialDatabase);
}, 1000);
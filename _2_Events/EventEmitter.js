// Node JS Event Driven
// Event Trigger (Olay Tetiklenmesi)
// Event And Listening

// Event Module Create
const myEvent = require('events');

// Emitter Class
const myEmitter = new myEvent.EventEmitter();

// Event Name
const eventSpecialDataCreate = "fileCreate";

// Event Listener
myEmitter.on(eventSpecialDataCreate, () => {
    console.log("fileCreate Event Listener");
});

// Event Trigger
myEmitter.emit(eventSpecialDataCreate);

//
setInterval(() => {
    myEmitter.emit(eventSpecialDataCreate);
}, 2000)
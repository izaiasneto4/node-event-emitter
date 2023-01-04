import { EventEmitter } from  "node:events";

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("event", () => {
  console.log("A new event was emitted");
});

/* This will run whatever the contents of `myEmitter.on` are */
myEmitter.emit("event");


/* This will run whatever the contents of `myEmitter.once` are, but will be ignored after the first time */
const onceEmitter = new MyEmitter();

onceEmitter.once("event", () => {
  console.log("A new event was emitted");
})

// will be run
onceEmitter.emit("event");

// will be ignored
onceEmitter.emit("event");

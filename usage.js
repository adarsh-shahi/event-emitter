import EventEmitter from "./eventEmitter.js";
const myEE = EventEmitter();

myEE.on("foo", () => {
	console.log("called foo");
});

myEE.on("foo", () => {
	console.log("second foo");
});

myEE.emit("foo");

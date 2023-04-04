import EventEmitter from "./eventEmitter.js";
const myEE = EventEmitter();

myEE.on("foo", () => {
	console.log("called foo");
});
myEE.on("foo", () => {
	console.log("second foo");
});
console.log(myEE.eventNames());

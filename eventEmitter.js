export default function EventEmitter() {
	return {
		__proto__: EventEmitter.prototype,
	};
}

EventEmitter.prototype.on = function (event, cb) {
	if (this.hasOwnProperty(event)) {
		this[event] = [...this[event], cb];
	} else {
		this[event] = [cb];
	}
};

EventEmitter.prototype.once = function (event, cb) {
	if (!this.hasOwnProperty(event)) {
		this[event] = [cb];
	}
};

EventEmitter.prototype.listeners = function (event) {
	if (this.hasOwnProperty(event)) {
		return this[event];
	}
};

EventEmitter.prototype.eventNames = function () {
	return Object.keys(this);
};

EventEmitter.prototype.emit = function (event) {
	if (this.hasOwnProperty(event)) {
		this[event].forEach((cb) => {
			cb();
		});
	}
};

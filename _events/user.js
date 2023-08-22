// requiring events module.
const events = require("events");

module.exports = class extends events.EventEmitter {
  constructor() {
    // calling constructor of  EventEmitter class.
    super();
  }
};

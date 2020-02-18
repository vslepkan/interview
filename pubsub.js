class EventEmitter {
  constructor() {
    this.topics = {};
  }

  on(event, cb) {
    if (!this.topics[event]) {
      this.topics[event] = [];
    }

    let id = Date.now();
    this.topics[event].push({ id, event, cb });

    return () => {
      this.topics[event] = this.topics[event].filter(e => e.id !== id);
    };
  }

  emmit(event, data) {
    if (!this.topics[event]) {
      return;
    }

    this.topics[event].forEach(e => {
      if (e.event === event) {
        e.cb(data);
      }

      return;
    });
  }
}

let emitter = new EventEmitter();

emitter.on("bar", data => {
  console.log(data);
});

let remove = emitter.on("foo", data => {
  console.log("foo fired", data);
});

remove();

emitter.emmit("foo", "Hello world");
emitter.emmit("bar", "Hey dude! I am alive!");

// Hey Dude! I am alive!

class EventObserver {
  constructor() {
    this.subscribers = [];
  }

  subscribe(cb) {
    let id = Date.now();
    this.subscribers.push({ id, cb });
  }

  unsubscribe(cb) {
    this.subscribers = this.subscribers.filter(s => s.cb !== cb);
  }

  broadcast(data) {
    this.subscribers.forEach(s => {
      s.cb(data);
    });
  }
}

const observer = new EventObserver();

observer.subscribe(data => {
  console.log("subscribe was fired", data);
});

let fn = data => {
  console.log("Unsubscribe", data);
};

observer.subscribe(fn);
observer.unsubscribe(fn);

observer.broadcast({ someData: "send email" });
observer.broadcast({ someData: "send data" });

// subscribe was fired {someData: "send email"}
// subscribe was fired {someData: "send data"}

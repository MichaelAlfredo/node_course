const EventEmitter = require("events");

const custonEmitter = new EventEmitter();

custonEmitter.on("x", (data, secondData) => {
  console.log("received");
  console.log(data);
  console.log(secondData);
});

custonEmitter.emit("x", "hola mundo", [1, 2, 3]);

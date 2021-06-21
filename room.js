import { Worker, isMainThread, parentPort } from "worker_threads";

export default class Room {
  constructor(a, b) {
    this.a = a;
    this.b = b || "default";
    this.worker = new Worker("./worker.js");

    this.worker.on("message", (msg) => console.log("new MSG: ", msg));
    this.worker.on("error", (err) => console.log(err));
    this.worker.on("exit", (code) => {
      console.log(`Worker stopped with exit code ${code}`);
    });
  }

  test() {
    setTimeout(() => console.log("hi"), 1000);
  }

  print() {
    console.log(this.a, this.b);
  }
}

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

import { Worker, isMainThread, parentPort } from "worker_threads";

import Room from "./room.js";

const RoomManager = {
  RoomList: [],

  addRoom(name, mode) {
    RoomManager.RoomList.push(new Room(name, mode));
  },
  getRooms() {
    console.log(RoomManager.RoomList);
  },
};

RoomManager.addRoom("test");
RoomManager.addRoom("test2");
// RoomManager.RoomList.forEach((room) => room.test());

// *****************
// Hello World works!

// if (isMainThread) {
//   const worker = new Worker(__filename);
//   worker.on("message", (msg) => {
//     console.log(msg);
//   });
// } else {
//   parentPort.postMessage("Hello world!");
// }

// *****************
// Promise Worker works!

// new Promise((resolve, reject) => {
//   const worker = new Worker("./worker.js", {
//     workerData: "Promis Worker",
//   });
//   worker.on("message", resolve);
//   worker.on("error", reject);
//   worker.on("exit", (code) => {
//     if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
//   });
// }).then((input) => console.log(input));

// *****************
// My Worker works!

// const testWorker = new Worker("./worker.js");
// testWorker.on("message", (msg) => console.log(msg));

import { parentPort, workerData } from "worker_threads";

console.log("hi");

for (let event = 0; event < 10; event++) {
  parentPort.postMessage(event);
  for (let i = 0; i < 1000000; i++) {
    parentPort.postMessage(i);
    for (let j = 0; j < 1000000; j++) {}
  }
}

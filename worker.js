import { parentPort, threadId } from "node:worker_threads";
import { blockingOperation } from "./blocking-operation.js";

parentPort.on("message", (...args) => {
  console.log(`[${new Date().toJSON()}] worker:${threadId} message`, args);

  blockingOperation();

  console.log(`[${new Date().toJSON()}] worker:${threadId} send back: ok`);
  parentPort.postMessage(`ok`);

  parentPort.close();
});

parentPort.on("close", () => {
  console.log(`worker:${threadId} port closed`);
});

process.on("exit", () => {
  console.log(`exited:${threadId}`);
});

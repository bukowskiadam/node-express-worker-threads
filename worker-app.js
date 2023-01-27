import { parentPort, threadId } from "node:worker_threads";
import express from "express";

import { blockingOperation } from "./blocking-operation.js";

const app = express();

app.get("/", (request, response) => {
  blockingOperation();
  response.send("finished");
});

const server = app.listen(0, () => {
  const { port } = server.address();
  console.log(`Worker server threadId:${threadId} listening on ${port}`);

  parentPort.postMessage(port);
});

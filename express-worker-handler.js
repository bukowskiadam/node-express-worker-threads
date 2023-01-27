import { Worker } from "node:worker_threads";

export const workerHandler = (workerFile) => {
  return (request, response) => {
    const worker = new Worker(workerFile);

    worker.on("message", (data) => {
      console.log(`[${new Date().toJSON()}] data back:`, data);
      response.send({ data });
    });

    worker.postMessage("test");
  };
};

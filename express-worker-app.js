import { Worker } from "node:worker_threads";
import http from "node:http";

export const workerApp = (workerAppFile) => {
  const worker = new Worker(workerAppFile);
  let port;

  worker.on("message", (childPort) => {
    port = childPort;
  });

  return (req, res) => {
    console.log(`handling request to ${req.url}`);

    const req2 = http
      .request({
        port,
        path: req.url,
        headers: req.headers,
        method: req.method,
      })
      .on("response", (res2) => {
        res.writeHead(res2.statusCode, res2.headers);
        res2.pipe(res);
      });
    req.pipe(req2);
  };
};

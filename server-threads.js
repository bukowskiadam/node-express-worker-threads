import express from "express";

import { workerHandler } from "./express-worker-handler.js";

const app = express();
const port = 3033;

app.get("/", (request, response) => {
  response.send("hello world!");
});

app.use("/blocking", workerHandler("./worker.js"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

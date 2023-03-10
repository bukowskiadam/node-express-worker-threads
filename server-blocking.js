import express from "express";

import { blockingOperation } from "./blocking-operation.js";

const app = express();
const port = 3033;

app.get("/", (request, response) => {
  response.send("hello world!");
});

app.get("/blocking", (request, response) => {
  blockingOperation();

  console.log("Finished");
  response.send("finished");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

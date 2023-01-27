import express from "express";

import { workerApp } from "./express-worker-app.js";

const app = express();
const port = 3033;

app.get("/", (request, response) => {
  response.send("hello world!");
});

app.use("/blocking", workerApp("./worker-app.js"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

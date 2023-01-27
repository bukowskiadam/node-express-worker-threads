import express from "express";

const app = express();
const port = 3033;

app.get("/", (request, response) => {
  response.send("hello world!");
});

app.get("/blocking", (request, response) => {
  for (let i = 0; i < 1000000; i++) {
    console.log(`Blocking: ${i}`);
  }

  console.log("Finished");
  response.send("finished");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

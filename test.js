import { get } from "node:http";

let first;
let firstDate;

const handle = (label) => {
  console.log(`[${new Date().toJSON()}] Started ${label}`);

  return () => {
    const now = new Date();
    let after = "";

    if (!first) {
      first = label;
      firstDate = now;
    } else {
      after = ` ${now - firstDate} ms after ${first}`;
    }
    console.log(`[${now.toJSON()}] ${label} finished${after}`);
  };
};

get("http://localhost:3033/blocking", handle("blocking"));
setTimeout(() => {
  get("http://localhost:3033/", handle("root"));
}, 100);

#!/usr/bin/env node
console.log("\033[s"); // save cursor
console.log("\033[2J"); // clear terminal

const logUpdate = require("log-update");
const frames = require("./frames");

let i = 0;

setInterval(() => {
  const frame = frames[i];
  i = (i + 1) % frames.length;

  logUpdate(`${frame}`);
}, 60);

process.on("SIGINT", () => {
  console.log("\033[2J");
  // console.log("\033[u"); // restore cursor
  process.exit();
});

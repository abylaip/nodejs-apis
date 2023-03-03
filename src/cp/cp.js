import { fork } from "child_process";

const spawnChildProcess = async (args) => {
  const scriptUrl = new URL("./files/script.js", import.meta.url);
  const childProcess = fork(scriptUrl, args, { silent: true });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);

  childProcess.stdout.on("data", (chunk) => {
    process.stdout.write(`Received from child process: ${chunk}`);
  });
};

spawnChildProcess();

// https://www.youtube.com/watch?v=9TQbB8zFf9E&t=838s

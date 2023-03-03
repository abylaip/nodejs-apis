import { createWriteStream } from "fs";
import { pipeline } from "stream/promises";

const write = async () => {
  const urlFile = new URL("./files/fileToWrite.txt", import.meta.url);
  const writeStream = createWriteStream(urlFile, { flags: "a" });

  await pipeline(process.stdin, writeStream);
};

await write();

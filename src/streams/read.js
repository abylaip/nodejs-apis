import { createReadStream } from "fs";
import { pipeline } from "stream/promises";

const read = async () => {
  const urlFile = new URL("./files/fileToRead.txt", import.meta.url);

  await pipeline(createReadStream(urlFile), process.stdout);
};

await read();

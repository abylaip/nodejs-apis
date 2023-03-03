import { readFile } from "fs/promises";

const read = async () => {
  try {
    console.log(await readFile("src/fs/files/fileToRead.txt", "utf-8"));
  } catch (err) {
    console.log(err);
  }
};

await read();

import { readdir } from "fs/promises";

const list = async () => {
  try {
    console.log(await readdir("src/fs/files"));
  } catch (err) {
    console.log(err);
  }
};

await list();

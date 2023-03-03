import { writeFile } from "node:fs/promises";
import { Buffer } from "node:buffer";

const create = async () => {
  try {
    const content = new Uint8Array(Buffer.from("I am fresh and young!"));
    await writeFile("src/fs/files/fresh.txt", content, { flag: "wx" });
  } catch (err) {
    throw err;
  }
};

await create();

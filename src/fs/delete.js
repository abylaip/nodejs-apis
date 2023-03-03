import { rm } from "fs/promises";

const remove = async () => {
  try {
    await rm("src/fs/files/fileToRemove.txt");
  } catch (err) {
    console.log(err);
  }
};

await remove();

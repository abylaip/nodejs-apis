import { readdir, copyFile, mkdir } from "fs/promises";

const copy = async () => {
  try {
    const [files] = await Promise.all([
      readdir("src/fs/files"),
      mkdir("src/fs/files_copy"),
    ]);
    const promises = files.map((fileName) => {
      copyFile(`src/fs/files/${fileName}`, `src/fs/files_copy/${fileName}`);
    });
    await Promise.all(promises);
  } catch (err) {
    console.log(err);
  }
};

await copy();

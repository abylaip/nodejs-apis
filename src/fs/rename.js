import { rename as renameFile } from "fs/promises";

const rename = async () => {
  try {
    await renameFile(
      "src/fs/files/wrongFilename.txt",
      "src/fs/files/properFilename.md"
    );
  } catch (err) {
    console.log(err);
  }
};

await rename();

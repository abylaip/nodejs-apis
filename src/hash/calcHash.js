import { createHash } from "crypto";
import { readFile } from "fs/promises";

const calculateHash = async () => {
  const urlFile = new URL(
    "./files/fileToCalculateHashFor.txt",
    import.meta.url
  );
  const content = await readFile(urlFile);
  const data = createHash("sha256").update(content);

  console.log(data.digest("hex"));
};

await calculateHash();

import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

const compress = async () => {
  await pipeline(
    createReadStream("src/zip/files/fileToCompress.txt"),
    createGzip(),
    createWriteStream("src/zip/files")
  );
};

await compress();

// let crypto = require("crypto-js");

// let word1 = "word1";

// let encode = crypto.AES.encrypt(JSON.stringify(word1), "secret key 123").toString();

// console.log(encode);

// let bytes = crypto.AES.decrypt(encode, "secret key 123");

// let decrypt = JSON.parse(bytes.toString(crypto.enc.Utf8));

// console.log(decrypt);

import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { rimraf } from "rimraf";

async function main() {
  const dir = join(".", "test_dir");
  const filePath = join(dir, "hello.txt");

  try {
    if (!existsSync(dir)) {
      await mkdir(dir, { recursive: true });
      console.log("folder created:", dir);
    }

    await writeFile(filePath, "Salut din fișierul de test!\n", "utf8");
    console.log("File created:", filePath);

    await rimraf(dir);
    console.log("folder deleted, thank god!");
  } catch (err) {
    console.error("Error:", err);
  }
}

main();

const fs = require("fs/promises");

async function getMusicFiles() {
  const dirContent = await fs.readdir("./");
  return dirContent.filter((f) => /\.(mp3|wav|wma|flac|aac|m4a|ogg)$/i.test(f));
}

function generateRandomNumberPrefix() {
  const randomNumber = Math.floor(Math.random() * 100);
  return randomNumber.toString(10).padStart(2, "0") + "_";
}

async function renameMusicFiles() {
  const musicFiles = await getMusicFiles();
  const numberPrefixRegex = /^[a-f0-9]{2}_/;
  musicFiles.forEach((fileName) => {
    let renamedFileName = fileName;
    if (numberPrefixRegex.test(fileName)) {
      renamedFileName = renamedFileName.slice(3);
    }
    renamedFileName = generateRandomNumberPrefix() + renamedFileName;
    fs.rename(`./${fileName}`, `./${renamedFileName}`);
  });
}

renameMusicFiles();

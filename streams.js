 const { writeFile } = require("fs/promises");

//Para crear un archivo
const createBigFile = async () => {
  await writeFile("./data/bigfile.txt", "hola mundo".repeat(10000));
};

createBigFile(); 

/* const { createReadStream } = require("fs");

const stream = createReadStream("./data/bigFile.txt", {
  encoding: "utf-8",
});

stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("end", () => {
  console.log("ya termine de leer el archivo");
});

stream.on("error", (error) => {
  console.log(error);
}); */

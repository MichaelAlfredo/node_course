const fs = require("fs");

/* const first = fs.readFileSync("./data/first.txt", "utf-8");
const second = fs.readFileSync("./data/second.txt");

console.log(first);
console.log(second.toString());

const title = "este contenido se ha añadido al archivo";
fs.writeFileSync("./data/fourd.txt", title, {
  flag: "a",
}); */

fs.readFile("./data/first.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});

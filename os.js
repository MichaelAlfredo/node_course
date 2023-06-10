const os = require("os");

/* console.log(os.userInfo());
console.log(os.upTime());
console.log(os.platform());
console.log(os.totalmem());
console.log(os.freemem()); */

console.table({
  os: os.platform(),
  version: os.release(),
  totalmemory: os.totalmem(),
});

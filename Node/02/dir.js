const fs = require("fs");

// if (!fs.existsSync("./new")) {
//   fs.mkdir("./new", err => {
//     if (err) throw err;
//     console.log("directory create");
//   });
// } else {
//   fs.rmdir("./new", err => {
//     if (err) throw err;
//     console.log("removed directory");
//   });
// }

if (!fs.existsSync("./new")) {
  fs.mkdir("./new", err => {
    if (err) throw err;
    console.log("directory create");
  });
}

if (fs.existsSync("./new")) {
  fs.rmdir("./new", err => {
    if (err) throw err;
    console.log("directory remove");
  });
}

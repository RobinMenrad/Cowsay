const studentInfo = require("./information");
var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hi, my name is ${studentInfo.name} and I'm from ${studentInfo.campus}`,
    e: "ôÔ",
    T: "U",
  })
);

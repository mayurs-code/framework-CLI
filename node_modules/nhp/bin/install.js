const yargs = require("yargs");
var clc = require("cli-color");
const { exec, execSync } = require("child_process");
const { Console } = require("console");

install()
function install() {
  // exec("npm install -g");
  console.log("START")
  exec("git clone https://github.com/priyanshu1109/flask_react",(error, stdout, stderr) => {    
    let x=execSync("dir")
    

  });
  
}
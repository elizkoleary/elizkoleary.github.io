const inquirer = require("inquirer");
const lib = require("./lib");
const output = require("./output");
const choices = ["Engineer", "Intern", "Manager"];

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?"
      },
      {
        type: "input",
        name: "id",
        message: "What is your employee ID number?"
      },
      {
        type: "rawlist",
        message: "What is your role?",
        name: "role",
        choices: choices
      },
  
    ]);
  }
  promptUser()
  
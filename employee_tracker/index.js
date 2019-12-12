var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Kelley22!",
  database: "Fake_Inc"
});


connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees by Department",
        "View all Employees by Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "Done",

      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View All Employees":
          allEmployeeSearch();
          break;

        case "View All Employees by Department":
          employeeByDeptSearch();
          break;

        case "View all Employees by Manager":
          employeeByMgrSearch();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Remove Employee":
          removeEmployee();
          break;

        case "Update Employee Role":
          changeEmployeeRole();
          break;

        case "Update Employee Manager":
          changeEmployeeMgr();
          break;

        case "Done":
          end();
          break;

      }
    });
}
function allEmployeeSearch() {
  connection.query("SELECT * FROM employees", function (err, result) {
    if (err) throw err;
    console.table(result)
  })
   runSearch();
};

function employeeByDeptSearch() {
  inquirer.prompt({
    type: "list",
    name: "department",
    message: "What Department do you want to see?",
    choices: [
      "Sales",
      "Engineering",
      "Finance",
      "Legal",
    ]
  })
    .then(function (name) {
      connection.query("SELECT * FROM Fake_Inc.employees WHERE ?", name, function (error, res) {
        if (error) throw error;
        console.table(res)
      })
    })
    .then(function () {
      runSearch();
    })
};

function employeeByMgrSearch() {
  inquirer.prompt({
    name: "manager",
    type: "rawlist",
    message: "Select a Manager to see their direct reports?",
    choices: [
      "Ashley Rodriguez",
      "Mike Chan",
      "John Doe",
      "Sarah Lourd",
    ]
  })
    .then(function (manager) {
      connection.query("SELECT firstName, lastName FROM Fake_Inc.employees WHERE ?", manager, function (error, results) {
        if (error) throw error;
        console.table(results)
      })
    })
    .then(function () {
      runSearch();
    })
};

function addEmployee() {
  inquirer
    .prompt([{
      name: "firstName",
      type: "input",
      message: "What is the Employee's first name?"
    },

    {
      name: "lastName",
      type: "input",
      message: "What is the Employee's last name?"
    },

    {
      name: "title",
      type: "input",
      message: "What is the Employee's title?"
    },

    {
      name: "department",
      type: "rawlist",
      message: "What Department will they work in?",
      choices: [
        "Sales",
        "Engineering",
        "Finance",
        "Legal",
      ]
    },

    {
      name: "salary",
      type: "input",
      message: "What is the Employee's salary?"
    },

    {
      name: "manager",
      type: "rawlist",
      message: "Who will be their manager?",
      choices: [
        "Ashley Rodriguez",
        "Mike Chan",
        "John Doe",
        "Sarah Lourd",
      ]
    }])
    .then(function (firstName, lastName, title, department, salary, manager) {
      console.log(firstName, lastName, title, department, salary, manager)
      connection.query("INSERT INTO Fake_Inc.employees (firstName,lastName,title,department,salary,manager) VAlUES(?,?,?,?,?,?);", {firstName, lastName, title, department, salary, manager}, function (error, results) {
        if (error) throw error;
        console.table(results)
      })
    })
    .then(function () {
      runSearch();
    })
};

function removeEmployee() {
  inquirer
    .prompt([
    {
      name: "lastName",
      type: "input",
      message: "What is the Employee's last name that you want to delete?"
    },
    ])
    .then(function (lastName) {
      connection.query("DELETE FROM Fake_Inc.employees WHERE ?", lastName, function (error, results) {
        if (error) throw error;
        console.table(results)
      })
    })
    .then(function () {
      runSearch();
    })
}

function changeEmployeeRole() {
  inquirer
    .prompt([
    {
      name: "lastName",
      type: "input",
      message: "What is the Employee's last name who's role you want to change?"
    },
    {
      name: "title",
      type: "input",
      message: "What is the Employee's new title?"
    },

    ])
    .then(function (answers) {
      let title = answers.title;
      let lastName = answers.lastName; 
      console.log(title)
      console.log(lastName)
      connection.query( `UPDATE Fake_Inc.employees SET title = ${lastName}, WHERE lastName = ${title}`, function (error, results, fields) {
        if (error) throw error;
        console.log(results, title, lastName)
        console.table(results)
      })
    })
    .then(function () {
      runSearch();
    })
}


function changeEmployeeMgr() {
  inquirer
    .prompt([
    {
      name: "lastName",
      type: "input",
      message: "What is the Employee's last name who's manager you want to change?"
    },
    {
      name: "manager",
      type: "rawlist",
      message: "Who will be their new manager?",
      choices: [
        "Ashley Rodriguez",
        "Mike Chan",
        "John Doe",
        "Sarah Lourd",
      ]
    }

    ])
    .then(function (lastName, manager) {
      console.log (lastName, manager)
      connection.query("UPDATE Fake_Inc.employees SET manager=? WHERE lastname=?", [manager, lastName], function (error, results) {
        if (error) throw error;
        console.table(results)
      })
    })
    .then(function () {
      runSearch();
    })
}

function end() {
  connection.end(function(err) {
    if (err) throw err;
    console.log("Process Ended")
  })};

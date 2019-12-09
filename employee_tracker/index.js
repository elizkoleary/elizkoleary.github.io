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

let allEmployees = []

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
          done();
          break;

      }
    });
}
function allEmployeeSearch() {
  connection.query("SELECT * FROM employees", function (err, result) {
    if (err) throw err;
    allEmployees = result
    console.table(allEmployees)
  });
  runSearch();
}
function employeeByDeptSearch() {
  inquirer.prompt({
    name: "department",
    type: "rawlist",
    message: "What Department do you want to see?",
    choices: [
      "Sales",
      "Engineering",
      "Finance",
      "Legal",
    ]
  })
    .then(function (answer) {
      connection.query('SELECT `firstName, lastName` FROM `employees` WHERE `department` = ?', [answer], function (error, results) {
        if (error) throw error;
        console.table(results)
      })
      });
      runSearch();
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
      .then(function (answer) {
        connection.query('SELECT `firstName, lastName` FROM `employees` WHERE `manager` = ?', [answer], function (error, results) {
          if (error) throw error;
          console.log(results)
        })
      });
      runSearch();
    };
        
      //continue editing from here

function addEmployee() {
        inquirer
          .prompt({
            name: "firstName",
            type: "input",
            message: "What is the Employee's first name?",

            name: "lastName",
            type: "input",
            message: "What is the Employee's last name?",

            name: "title",
            type: "input",
            message: "What is the Employee's title?",

            name: "department",
            type: "rawlist",
            message: "What Department will they work in?",
            choices: [
              "Sales",
              "Engineering",
              "Finance",
              "Legal",
            ],
        
            name: "salary",
            type: "input",
            message: "What is the Employee's salary?",

            name: "manager",
            type: "rawlist",
            message: "Who will be their manager?",
            choices: [
              "Ashley Rodriguez",
              "Mike Chan",
              "John Doe",
              "Sarah Lourd",
            ]
       })
          .then(function (answer) {
            connection.query('INSERT INTO `Fake_Inc` (firstName,lastName,title,department,salary,manager) VAlUES(?)', [answer], function (error, results) {
              if (error) throw error;
              console.log(results)
            })
          });
          runSearch();
        };
 //continue editing from here   
function songAndAlbumSearch() {
        inquirer
          .prompt({
            name: "artist",
            type: "input",
            message: "What artist would you like to search for?"
          })
          .then(function (answer) {
            var query = "SELECT top_albums.year, top_albums.album, top_albums.position, top5000.song, top5000.artist ";
            query += "FROM top_albums INNER JOIN top5000 ON (top_albums.artist = top5000.artist AND top_albums.year ";
            query += "= top5000.year) WHERE (top_albums.artist = ? AND top5000.artist = ?) ORDER BY top_albums.year, top_albums.position";

            connection.query(query, [answer.artist, answer.artist], function (err, res) {
              console.log(res.length + " matches found!");
              for (var i = 0; i < res.length; i++) {
                console.log(
                  i + 1 + ".) " +
                  "Year: " +
                  res[i].year +
                  " Album Position: " +
                  res[i].position +
                  " || Artist: " +
                  res[i].artist +
                  " || Song: " +
                  res[i].song +
                  " || Album: " +
                  res[i].album
                );
              }

              runSearch();
            });
          });
      }

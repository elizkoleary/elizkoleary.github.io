const inquirer = require("inquirer");
const fs = require("fs");


function promptManager() {
  return inquirer.prompt([
      {
          type: "input",
          message: "What is your manager's name?",
          name: "managerName"
      }, {
          type: "input",
          message: "What is your manager's employee ID?",
          name: "managerID"
      }, {
          type: "input",
          message: "What is your manager's email address?",
          name: "managerEmail"
      }, {
          type: "input",
          message: "What is your manager's office number?",
          name: "managerOffice"
      }
    ]).then(function ({managerName, managerID, managerEmail, managerOffice}) {
      promptTeamMember();
      const html =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
<div class="jumbotron jumbotron-fluid" style="background-color: tomato; color: white; text-align: center;">
<div class="container">
  <h1 class="display-4">The Team</h1>
</div>
</div>
<div class="card" style="width: 18rem;">
  <div class="card-body" style= "background-color: blue;">
    <h5 class="card-title" style= "color: white;">${managerName}</h5>
    <h5 class="card-title" style= "color: white;">Manager</h5>
    <ul class="list-group">
      <li class="list-group-item">ID: ${managerID}</li>
      <li class="list-group-item">Email: ${managerEmail}</li>
      <li class="list-group-item">Office Number: ${managerOffice}</li>
    </ul>        
  </div>
</div>`
      fs.writeFile('./output/main.html', html,(err) => {
          if (err) 
              throw err;
          })
  })
}
      function promptTeamMember() {
        return inquirer.prompt([{
                type: "list",
                message: "Which type of team member would you like to add?",
                name: "teamMembers",
                choices: ["Engineer", "Intern", "Done"]
            }]).then(function (answer) {
            switch (answer.teamMembers) {
                case "Engineer": promptEngineer();
                    break;
                case "Intern": promptIntern();
                    break;
                default:
                    console.log("***** Congratulations, Your team is complete. *****");
                    fs.appendFile('./output/main.html', "</div></div></body></html>", 
                    (err) => {
                        if (err) 
                            throw err;
                });
            }
        })
    };

    function promptEngineer() {
      return inquirer.prompt([
          {
              type: "input",
              message: "What is the engineer's name?",
              name: "engineerName"
          }, {
              type: "input",
              message: "What is the engineer's employee ID?",
              name: "engineerID"
          }, {
              type: "input",
              message: "What is the engineer's email address?",
              name: "engineerEmail"
          }, {
              type: "input",
              message: "What is the engineer's GitHub username?",
              name: "engineerGithub"
          }
        ]).then(function ({engineerName, engineerID, engineerEmail, engineerGithub}) {
          promptTeamMember();
          fs.appendFile('./output/main.html', `
          <div class="card" style="width: 18rem;">
          <div class="card-body" style= "background-color: red;">
            <h5 class="card-title"  style= "color: white;">${engineerName}</h5>
            <h5 class="card-title" style= "color: white;">Engineer</h5>
            <ul class="list-group">
              <li class="list-group-item">ID: ${engineerID}</li>
              <li class="list-group-item">Email: ${engineerEmail}</li>
              <li class="list-group-item">Github: ${engineerGithub}</li>
            </ul>        
          </div>
        </div>
                </div>
                  </div>`, 
                  (err) => {
                      if (err) 
                          throw err;
              })
      })
  }

          function promptIntern() {
            return inquirer.prompt([
                {
                    type: "input",
                    message: "What is the intern's name?",
                    name: "internName"
                }, {
                    type: "input",
                    message: "What is the intern's employee ID?",
                    name: "internID"
                }, {
                    type: "input",
                    message: "What is the intern's email address?",
                    name: "internEmail"
                }, {
                    type: "input",
                    message: "What is the intern's school name?",
                    name: "internSchool"
                }
              ]).then(function ({internName, internID, internEmail, internSchool}) {
                promptTeamMember();
                fs.appendFile('./output/main.html', `
                <div class="card" style="width: 18rem;">
                <div class="card-body" style= "background-color: green;>
                  <h5 class="card-title" style= "color: white;">${internName}</h5>
                  <h5 class="card-title" style= "color: white;">Intern</h5>
                  <ul class="list-group">
                    <li class="list-group-item">ID: ${internID}</li>
                    <li class="list-group-item">Email: ${internEmail}</li>
                    <li class="list-group-item">School: ${internSchool}</li>
                  </ul>        
                </div>
              </div>`, 
                        (err) => {
                            if (err) 
                                throw err;
                    })
            })
        }
        
        promptManager();
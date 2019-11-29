const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const pdf = require('html-pdf');
const axios = require('axios');

const writeFileAsync = util.promisify(fs.writeFile);
const choices = ["Red", "Blue", "Green", "Orange", "Yellow"];

function promptUser() {
  return inquirer.prompt([
    {
      type: "rawlist",
      message: "What is your favorite color?",
      name: "color",
      choices: choices
    },
    {
      type: "input",
      name: "username",
      message: "Enter your GitHub Username"
    },
    {
      type: "input",
      name: "job",
      message: "Where do you currently work?"
    },

  ]);
}

function generateHTML(answers, ghubCall) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
      <title>GitHub PDF</title>
  </head>
  
  <body >
  <div style="max-width: 960px">
      <div class="jumbotron jumbotron-fluid" style="background-color: ${answers.color}">
          <div class="container" style="text-align: center;">
              <img src=${ghubCall.data.avatar_url} width="180px" alt="github pic" class="img-thumbnail">
              <p class="display-4" style="background-color: ${answers.color}">Hi! My name is ${ghubCall.data.name}</p>
              <p class="lead">I work at ${answers.job}.</p>
              <p class="lead">I live in ${ghubCall.data.location}.</p>
              <span class="fa fa-map-marker"></span><a  href="https://www.google.com/maps/place/${ghubCall.data.location}">location</a>    
              <span class="fa fa-github"></span><a  href="${ghubCall.data.html_url}">GitHub</a>   
              <span class="fa fa-rss"></span><a  href="${ghubCall.data.blog}">Blog</a></<span>
              </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <p class="lead"> ${ghubCall.data.bio}.</p>
              </div>
          </div>
          <div class="row">
              <div class="col-1"></div>
              <div class="col-5">
                  <div class="card">
                      <div class="card-body" style="background-color: ${answers.color}">
                          Public Repositories: ${ghubCall.data.public_repos} </div>
                  </div>
              </div>
  
              <div class="col-5">
                  <div class="card">
                      <div class="card-body" style="background-color: ${answers.color}">
                          Followers: ${ghubCall.data.followers} </div>
                  </div>
              </div>
              <div class="col-1"></div>
  
          </div>
          <div class="row">
              <div class="col-1"></div>
              <div class="col-5">
                  <div class="card">
                      <div class="card-body" style="background-color: ${answers.color}">
                          GitHub Stars: ${ghubCall.data.public_gists} </div>
                  </div>
              </div>
  
              <div class="col-5">
                  <div class="card">
                      <div class="card-body" style="background-color: ${answers.color}">
                          Following: ${ghubCall.data.following} </div>
                  </div>
              </div>
              <div class="col-1"></div>
  
          </div>
      </div>
  </div>
  </body>
  
  </html>`;
}



async function init() {
  console.log("hi");
  try {
    const answers = await promptUser();
    const ghubCall = await axios.get("https://api.github.com/users/" + answers.username);
    console.log("ghubCall")
    console.log(ghubCall)
    const html = generateHTML(answers, ghubCall);

    await writeFileAsync("index.html", html);

    var readHtml = fs.readFileSync('index.html', 'utf8');
    var options = { format: 'Letter',
                      height:"970px",
                    width: "970px"};

    pdf.create(readHtml, options).toFile('test.pdf', function (err, res) {
      if (err) return console.log(err);
      console.log(res);
    });

    console.log("Successfully wrote to index.html");
  } catch (err) {
    console.log(err);
  }
}

init();

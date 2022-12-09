const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Importing Classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//Arrays to store team and IDs
const team = [];
const ids = [];

function startApp(){
  function manageTeam(){
    inquirer.prompt([
      {
        type: 'input',
        name: 'mangName',
        message: "What is the manager's name?"
      },
      {
        type: 'input',
        name: 'mangId',
        message: "What is the manager's ID?"
      },
      {
        type: 'input',
        name: 'mangEmail',
        message: "What is the manager's email?"
      },
      {
        type: 'input',
        name: 'mangOffice',
        message: "What is the manager's office number?"
      }
    ])
    .then((answers) => {
      const lead = new Manager(answers.mangName, answers.mangId, answers.mangEmail, answers.mangOffice);
      team.push(lead);
      ids.push(answers.mangId);
      startTeam();
    })
  }

  function startTeam(){
    inquirer.prompt([
      {
        type: 'list',
        name: 'teamMemberAdd',
        message: "Which type of team member would you like to add now?",
        choices: [
          'Engineer',
          'Intern',
          'No more members to add.'
        ],
      },
    ])
    .then((choice) => {
      switch(choice.teamMemberAdd){
        case 'Engineer':
          addEng();
          break;
        case 'Intern':
          addIntern();
          break;
        default:
          buildTeam();
      }
    });
  }

  function addEng(){
    inquirer.prompt([
      {
        type: 'input',
        name: 'engName',
        message: "What is the engineer's name?"
      },
      {
        type: 'input',
        name: 'engId',
        message: "What is the engineer's ID?"
      },
      {
        type: 'input',
        name: 'engEmail',
        message: "What is the engineer's email?"
      },
      {
        type: 'input',
        name: 'engGithub',
        message: "What is the engineer's GitHub username?"
      },
    ])
    .then((answers) => {
      const eng = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.engGitHub);
      team.push(eng);
      ids.push(answers.engId);
      startTeam();
    });
  }

  function addIntern(){
    inquirer.prompt([
      {
        type: 'input',
        name: 'internName',
        message: "What is the intern's name?"
      },
      {
        type: 'input',
        name: 'internId',
        message: "What is the intern's ID?"
      },
      {
        type: 'input',
        name: 'internEmail',
        message: "What is the intern's email?"
      },
      {
        type: 'input',
        name: 'internSchool',
        message: "What is the intern's school?"
      },
    ])
    .then((answers) => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      team.push(intern);
      ids.push(answers.internId);
    })
  }

  function buildTeam(){
    fs.writeFile(path.join(__dirname, 'dist', 'index.html'), generateHTML(team), (err) => {
      if(err) throw err;
      console.log('Team profile has been created!');
    });
  }

  manageTeam();
}

startApp();
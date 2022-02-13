const inquirer = require('inquirer');
const fs = require('fs');
// const { inherits } = require('util');
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const generateHTML = require('./Assets/generateHTML')
const teamList = []

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the manager\'s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is their employee id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is their email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is their office number?',
            name: 'officeNumber',
        },
    ]).then(answers => {
        console.log(answers)
        mainMenu()
    })
}

function mainMenu() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do next?',
            name: 'choice',
            choices: ["Add an engineer.", "Add an intern.", "Build team."]
        },
    ]).then(answers => {
        let choice = answers.choice;
        if (choice === "Add an engineer.") {
            addEngineer()
        } else if (choice === "Add an intern.") {
            addIntern()
        } else {
            buildTeam()
        }

    })

}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the engineer\'s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is their employee id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is their email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is their GitHub?',
            name: 'gitHub',
        },
    ]).then(answers => {
        console.log(answers)
        mainMenu()
    })

}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the intern\'s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is their employee id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is their email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is their school?',
            name: 'school',
        },
    ]).then(answers => {
        console.log(answers)
        mainMenu()
    })

}

function buildTeam() {
    // if (addTeamData.addTeam === `Team complete.`) {
    //     console.log('Finished making team')
        // employeeList.forEach(employee => {
            writeToFile('teamList.html', (teamList), err => {
                if (err) {
                    console.log(err);
                }
                console.log('Generated team!')
            })
        };

    


const writeToFile = (fileName, employeeList) => {
    fs.writeFileSync(fileName, generateHTML(employeeList))
}

addManager();
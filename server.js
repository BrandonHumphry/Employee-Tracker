// this is strictly the runtime that connects the views and db(model)
// var express = require("express");
var inquirer = require("inquirer");
var connection = require("./db/connection.js");

const employeeQuestions = function() {
  inquirer
    .prompt({
      type: "list",
      name: "start",
      message: "What would you like to do?",
      choices: [
        "view all employees",
        "view all roles",
        "view all departments",
        "add employee",
        "add department",
        "add role",
        "update employee role",
        "remove employee"
      ]
    })
    .then(function(answer) {
      console.log(answer);
 
      switch (answer.start) {
        case "view all employees":
          viewEmployees();
          break;

        case "view all roles":
          viewRoles();
          break;

        case "view all departments":
          viewDepartments();
          break;

        case "add employee":
          addEmployee();
          break;

        case "update employee role":
          updateRole();
          break;

        case "add department":
          addDepartment();
          break;

        case "add role":
          addRole();
          break;
      }
    });
};

employeeQuestions();

async function viewEmployees() {
  const answer = await connection.query("SELECT * FROM employee");
  console.log("\n Employees Retrieved from Database \n");
  console.table(answer);
}

async function viewRoles() {
  const answer = await connection.query("SELECT * FROM role") 
    console.log("\n Role Retrieved from Database \n");
    console.table(answer);
}

async function viewDepartments() {
  const answer = await connection.query("SELECT * FROM department") 
    console.log("\n Department Retrieved from Database \n");
    console.table(answer);
}



//   askQ();


// // addEmployee();
// // updateRole();
// // addDepartment();
// // addRole();
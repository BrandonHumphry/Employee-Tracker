// this is strictly the runtime that connects the views and db(model)
var express = require("express");
var inquirer = require("inquirer");
var connection = require("./db/connection.js");

const questionSet = function() {
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
questionSet();

async function viewEmployees() {
  const answer = await connection.query("SELECT * FROM employee", function(err, answer){
    console.log("\n Employees Retrieved from Database \n");
    console.table(answer);
  }); 
  questionSet();
}

async function viewRoles() {
  const answer = await connection.query("SELECT * FROM role", function(err, answer){
    console.log("\n Role Retrieved from Database \n");
    console.table(answer);
  });
   questionSet();
}

async function viewDepartments() {
  const answer = await connection.query("SELECT * FROM department", function(err, answer){
    console.log("\n Department Retrieved from Database \n");
    console.table(answer);
  });
  questionSet();  
}

async function addEmployee() {
  inquirer
    .prompt([{
      type: "input",
      name: "firstname",
      message: "Please enter the employee's first name",
   },
   {
    type: "input",
    name: "lastname",
    message: "Please enter the employee's last name",
  }
 ])
.then(function(answer){
  connection.query(
    "INSERT INTO employee SET ?",
    {
      first_name: answer.firstname,
      last_name: answer.lastname,
      role_id: null,
      manager_id: null
    },
    function(err, answer){
      if (err) {
        throw err;
      }
    }
  );
  questionSet();
})
}

// // updateRole();
// // addDepartment();
// // addRole();
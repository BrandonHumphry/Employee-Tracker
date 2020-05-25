// this is strictly the runtime that connects the views and db(model)
var express = require("express");
var inquirer = require("inquirer");
var exphbs = require("express-handlebars");
// Import routes and give the server access to them.
var routes = require("./controller/index.js");

var PORT = process.env.PORT || 3000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(require("./controller"));

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

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

function viewDepartments() {
  connection.query("SELECT * FROM department", function(err, answer) {
    console.log("\n Departments Retrieved from Database \n");
    console.table(answer);
  });
  askQ();

viewEmployees();
viewRoles();
viewDepartments();
addEmployee();
updateRole();
addDepartment();
addRole();
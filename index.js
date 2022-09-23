//importing files
const initQs = require("./lib/questions");
const Qs = require("./lib/query");
//importing packages
const inquirer = require("inquirer");
const mysql = require("mysql2");
require('console.table');

//database connection object
const db = mysql.createConnection({
    host: "localhost",
    post: 3306,
    user: "root",
    password: "rootroot",
    database: "employees_db"
});

//database connection
db.connect((err) => {
    if(err){
        console.log(err);
        return;
    } 
    console.log("Connected to databases");
})


//functions for each question

//shows all employees in database
const viewEmployees = () => {
    db.query(Qs.viewEmployees, (err, result) => {
        if (err) console.error(err);
        console.table(result);
        init();
    })
};

//shows all departments in database
const viewDepartments = () => {
    db.query("SELECT * FROM department", (err, result) => {
        if (err) console.error(err);
        console.table(result);
        init();
    })
}

//shows all roles in database
const viewRoles = () =>{
    db.query(Qs.viewRoles, (err, result) => {
        if (err) console.error(err);
        console.table(result);
        init();
    })
}

//main function to run app
const init = async () => {
    let userPick = await inquirer.prompt(initQs);
    //a switch statement to help delegate which function will be ran
    switch (userPick.userChoice){
       case "View All Employees":
            viewEmployees();
            break;
        case "View All Roles":
            viewRoles();
            break;
        case "View All Departments":
            viewDepartments();
            break;
        case "Add Employee":
            addEmployee();
            break;
        case "Update Employee Role":
            updateRole();
            break;
        case "Add Role":
            addRole();
            break;
        case "Add Department":
            addDepartment();
            break;
        case "Quit":
            process.exit();

    }
}

init();
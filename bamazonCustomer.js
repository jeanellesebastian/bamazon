// require packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// create connection information for sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "password123",
    database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // display message once connection is made
    console.log(">>> Connection to bamazon successful! <<<");
    // run the displayItems after the connection is made
    displayItems();
});

// displays items in bamazon database
function displayItems() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        // run customerPrompt function after displayItems runs
        customerPrompt();
        //get a single record after getting all records from the db
    });
}

// ask user what item they want from the list

function customerPrompt() {
    // 1) the ID of product they want to buy
    // 2) how many units they want to buy
    inquirer.prompt([
            {
                name: "id",
                type: "input",
                message: "\n========================================\n\nFrom the list above, what is the ID of the product you want to buy?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "quantity",
                type: "input",
                message: "\n========================================\n\nHow many of this product do you want to buy?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function(answer) {
            var checkItem(answer.id, answer.quantity);
        });
    }


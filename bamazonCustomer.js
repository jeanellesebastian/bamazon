// require packages
var mysql = require("mysql");
var inquirer = require("inquirer");
require( 'console.table' );

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
        console.table(res);
        // run itemCheck function after displayItems runs
        itemCheck();
    });
}

// ask user what item they want from bamazon product list
function itemCheck() {
    inquirer
        .prompt([
            {
            name: "id",
            type: "input",
            message: "\n========================================\n\nFrom the list above, what is the ID of the product you want to buy?",
            validate: function (value) {
                // checks that the input is in fact a number
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
                }
            },
            
            {
                name: "quantity",
                type: "input",
                message: "\n========================================\n\nHow many would you like to purchase",
                validate: function (value) {
                // checks that the input is in fact a number
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ]);
    }
        // QUERY DATABASE for the product user inputted

            // IF the user's product's answer.quantity is <= database.quantity
                // then return "yes item is available, your order has been processed!"
                // and update database - quantity

            // ELSE if not then return "sorry, there is not enough product in stock."
                // rerun program - have user start over displayBamazon();

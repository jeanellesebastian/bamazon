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
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        // query the bamazon database for the product 
        .then(function (answer) {
            var query = "SELECT id, product_name, price, stock_quantity FROM products WHERE ?";
            connection.query(query, { id: answer.id }, function (err, res) {
                for (var i = 0; i < res.length; i++) {
                    console.log("\nProduct ID: " + res[i].id + " || Product Name: " + res[i].product_name + " || Price: " + res[i].price + " || Quantity: " + res[i].stock_quantity);
                }
                return res[i];
                quantityCheck();
            });
        });
}

// function quantityCheck (itemCheck) {
//     inquirer
//         .prompt({
//             name: "quantity",
//             message: "\n========================================\n\nHow many would you like to purchase?",
//             validate: function (value) {
//                 if (isNaN(value) === false) {
//                     return true;
//                 }
//                 return false;
//             }
//         })
//         .then()
// }
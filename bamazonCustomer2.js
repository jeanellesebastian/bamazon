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

            connection.query("SELECT * FROM products WHERE ?", { product: answer.song }

            // then take user answer and check database for quantity
            // if user's answer.quantity is <= database.quantity
                // then return "yes item is available, your order has been processed!"
                // and update database - quantity
            // if not then return "sorry, there is not enough product in stock."

            









            
    //         "
    //         var query = "SELECT id FROM products WHERE ?";
    //         connection.query(query, { id: answer.id }, function (err, res) {
           
    //         for (var i = 0; i < results.length; i++) {
    //           if (results[i].item_name === answer.choice) {
    //             chosenItem = results[i];
    //           }
    //         }
    //         // determine if bid was high enough
    //         if (chosenItem.highest_bid < parseInt(answer.bid)) {
    //           // bid was high enough, so update db, let the user know, and start over
    //           connection.query(
    //             "UPDATE auctions SET ? WHERE ?",
    //             [
    //               {
    //                 highest_bid: answer.bid
    //               },
    //               {
    //                 id: chosenItem.id
    //               }
    //             ],
    //             function(error) {
    //               if (error) throw err;
    //               console.log("Bid placed successfully!");
    //               start();
    //             }
    //           );
    //         }
    //         else {
    //           // bid wasn't high enough, so apologize and start over
    //           console.log("Your bid was too low. Try again...");
    //           start();
    //         }
    //       });
    //   });
    // }
            
            
            
//             var query = "SELECT id, product_name, price, stock_quantity FROM products WHERE ?";
//             connection.query(query, { id: answer.id }, function (err, res) {
//                 for (var i = 0; i < res.length; i++) {
//                 }
//                 return res[i];
//                 // quantityCheck();
//             });
//         });
// }

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
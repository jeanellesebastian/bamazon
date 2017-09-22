-- Create a MySQL Database called bamazon.
-- Then create a Table inside of that database called products.
-- The products table should have each of the following columns:
-- item_id (unique id for each product)
-- product_name (Name of product)
-- department_name
-- price (cost to customer)
-- stock_quantity (how much of the product is available in stores)
-- Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

DROP DATABASE bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL (6,2),
  stock_quantity INT,
  PRIMARY KEY (id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("XBox ONE", "Gaming", 499.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Firestick", "Electronics", 39.99, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mario Kart 8", "Gaming", 49.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Eloquent Javascript", "Books", 25.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("GoPro", "Electronics", 399.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("A Brief History of Time", "Books", 9.99, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Harry Potter", "Books", 20.00, 90);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Snowboard", "Recreation", 200.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Surfboard", "Recreation", 99.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rubiks Cube", "Toys", 10.00, 15);


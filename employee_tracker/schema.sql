DROP DATABASE IF EXISTS Fake_Inc;

/* Create database */
CREATE DATABASE Fake_Inc;
USE Fake_Inc;

/* Create new table with a primary key that auto-increments, and a text field */
CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  title VARCHAR(100) NOT NULL,
  department VARCHAR(100) NOT NULL,
  salary INT(100) NOT NULL,
  manager VARCHAR(100),
  PRIMARY KEY (id)
);

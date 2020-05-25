CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(30) NOT NULL
);

CREATE TABLE role
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title varchar(30) NOT NULL,
    salary decimal NOT NULL,
    department_id int,
    CONSTRAINT fk_department_id FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	first_name varchar(100) NOT NULL,
    last_name varchar(100) NOT NULL,
	role_id int NOT NULL,
    manager_id int,
    CONSTRAINT fk_role FOREIGN KEY(role_id) REFERENCES role(id) ON DELETE CASCADE,
    CONSTRAINT fk_mananger FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);





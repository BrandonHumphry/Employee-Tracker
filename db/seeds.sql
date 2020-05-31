use employees_db;
INSERT INTO department
    (name)
VALUES
    ('IT'),
    ('Marketing'),
    ('HR'),
    ('Facilities');

INSERT INTO role 
    (title, salary, department_id)
VALUES
    ('Copywriter', 80000, 1),
    ('DevOps', 100000, 2),
    ('Recruiter', 800000, 3),
    ('Maintenance', 60000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
	('John', 'Doe',1,NULL),
    ('Jane', 'Doe',2,NULL),
    ('Bo', 'Bob', 4, NULL),
    ('Joe', 'Jo', 3, NULL)
INSERT INTO departments(department_name, createdAt, updatedAt) VALUES('Executive','2020-01-01 10:10:10','2020-01-01 10:10:10');
INSERT INTO departments(department_name, createdAt, updatedAt) VALUES('Administration','2020-01-01 10:10:10','2020-01-01 10:10:10');
INSERT INTO departments(department_name, createdAt, updatedAt) VALUES('Finance','2020-01-01 10:10:10','2020-01-01 10:10:10');
INSERT INTO departments(department_name, createdAt, updatedAt) VALUES('Sales','2020-01-01 10:10:10','2020-01-01 10:10:10');
INSERT INTO departments(department_name, createdAt, updatedAt) VALUES('Marketing','2020-01-01 10:10:10','2020-01-01 10:10:10');
INSERT INTO departments(department_name, createdAt, updatedAt) VALUES('HR','2020-01-01 10:10:10','2020-01-01 10:10:10');
INSERT INTO departments(department_name, createdAt, updatedAt) VALUES('IT','2020-01-01 10:10:10','2020-01-01 10:10:10');



INSERT INTO employee_roles(role_name, base_pay, createdAt, updatedAt, departmentId) VALUES('CEO',200000,'2020-01-01 10:10:10','2020-01-01 10:10:10', 15);
INSERT INTO employee_roles(role_name, base_pay, createdAt, updatedAt, departmentId) VALUES('Accountant',90000,'2020-01-01 10:10:10','2020-01-01 10:10:10', 17);
INSERT INTO employee_roles(role_name, base_pay, createdAt, updatedAt, departmentId) VALUES('Network Admin',90000,'2020-01-01 10:10:10','2020-01-01 10:10:10', 21);
INSERT INTO employee_roles(role_name, base_pay, createdAt, updatedAt, departmentId) VALUES('Human Resources Manager',90000,'2020-01-01 10:10:10','2020-01-01 10:10:10', 20);
INSERT INTO employee_roles(role_name, base_pay, createdAt, updatedAt, departmentId) VALUES('Office Coordinator',40000,'2020-01-01 10:10:10','2020-01-01 10:10:10', 20);
INSERT INTO employee_roles(role_name, base_pay, createdAt, updatedAt, departmentId) VALUES('Administrative Assistant',90000,'2020-01-01 10:10:10','2020-01-01 10:10:10', 16);
INSERT INTO employee_roles(role_name, base_pay, createdAt, updatedAt, departmentId) VALUES('Marketing Director',130000,'2020-01-01 10:10:10','2020-01-01 10:10:10', 19);
INSERT INTO employee_roles(role_name, base_pay, createdAt, updatedAt, departmentId) VALUES('Senior Software Engineer',150000,'2020-01-01 10:10:10','2020-01-01 10:10:10', 21);
INSERT INTO employee_roles(role_name, base_pay, createdAt, updatedAt, departmentId) VALUES('Marketing Specialist',60000,'2020-01-01 10:10:10','2020-01-01 10:10:10', 19);
INSERT INTO employee_roles(role_name, base_pay, createdAt, updatedAt, departmentId) VALUES('Senior Sales Representative',90000,'2020-01-01 10:10:10','2020-01-01 10:10:10', 18);
INSERT INTO employee_roles(role_name, base_pay, createdAt, updatedAt, departmentId) VALUES('Sales Representative',50000,'2020-01-01 10:10:10','2020-01-01 10:10:10', 18);
INSERT INTO employee_roles(role_name, base_pay, createdAt, updatedAt, departmentId) VALUES('Web Developer',80000,'2020-01-01 10:10:10','2020-01-01 10:10:10', 21);


INSERT INTO teams(team_name, project, project_description, created_at) VALUES('Executive', 'Company Leadership', 'Strategic Planning', '2020-01-01 10:10:10');


INSERT INTO employees(first_name, last_name, start_day, createdAt, updatedAt, employeeRoleId) VALUES('Frank', 'Walker','2020-01-01 10:10:10', '2020-01-01 10:10:10', '2020-01-01 10:10:10', 1);
INSERT INTO employees(first_name, last_name, start_day, createdAt, updatedAt, employeeRoleId) VALUES('Courtney', 'Vance','2020-01-01 10:10:10', '2020-01-01 10:10:10', '2020-01-01 10:10:10', 2);
INSERT INTO employees(first_name, last_name, start_day, createdAt, updatedAt, employeeRoleId) VALUES('Anish', 'Kapoor','2020-01-01 10:10:10', '2020-01-01 10:10:10', '2020-01-01 10:10:10', 3);
INSERT INTO employees(first_name, last_name, start_day, createdAt, updatedAt, employeeRoleId) VALUES('Coleen', 'Nolan','2020-01-01 10:10:10', '2020-01-01 10:10:10', '2020-01-01 10:10:10', 4);
INSERT INTO employees(first_name, last_name, start_day, createdAt, updatedAt, employeeRoleId) VALUES('Ken', 'Kobayashi','2020-01-01 10:10:10', '2020-01-01 10:10:10', '2020-01-01 10:10:10', 6);
INSERT INTO employees(first_name, last_name, start_day, createdAt, updatedAt, employeeRoleId) VALUES('Wally', 'Schirra','2020-01-01 10:10:10', '2020-01-01 10:10:10', '2020-01-01 10:10:10', 7);
INSERT INTO employees(first_name, last_name, start_day, createdAt, updatedAt, employeeRoleId) VALUES('Rhonda', 'Byrne','2020-01-01 10:10:10', '2020-01-01 10:10:10', '2020-01-01 10:10:10', 8);
INSERT INTO employees(first_name, last_name, start_day, createdAt, updatedAt, employeeRoleId) VALUES('Jason', 'Lively','2020-01-01 10:10:10', '2020-01-01 10:10:10', '2020-01-01 10:10:10', 9);
INSERT INTO employees(first_name, last_name, start_day, createdAt, updatedAt, employeeRoleId) VALUES('Titus', 'Welliver','2020-01-01 10:10:10', '2020-01-01 10:10:10', '2020-01-01 10:10:10', 12);
INSERT INTO employees(first_name, last_name, start_day, createdAt, updatedAt, employeeRoleId) VALUES('Jaimie', 'Alexander','2020-01-01 10:10:10', '2020-01-01 10:10:10', '2020-01-01 10:10:10', 10);
INSERT INTO employees(first_name, last_name, start_day, createdAt, updatedAt, employeeRoleId) VALUES('Jason', 'Beghe','2020-01-01 10:10:10', '2020-01-01 10:10:10', '2020-01-01 10:10:10', 11);
INSERT INTO employees(first_name, last_name, start_day, createdAt, updatedAt, employeeRoleId) VALUES('Tammy', 'Duckworth','2020-01-01 10:10:10', '2020-01-01 10:10:10', '2020-01-01 10:10:10', 5);
# software_doc_design-hr_suite

- Lab2 on branch: lab2

Add .env file with your db credentials

Create Db with tables:
```
CREATE TABLE Employee (
    id      INT NOT NULL PRIMARY KEY,
    first_name          VARCHAR(16)      NULL,
    last_name           VARCHAR(16)      NULL,
    email VARCHAR(30) null
);

CREATE TABLE Emp_Dev_Plan (
    id INT NOT NULL PRIMARY KEY,
    dev_plan_name VARCHAR(20)  NULL,
    employee_id int null,
    CONSTRAINT fk_employee_id
    FOREIGN KEY (employee_id) REFERENCES Employee(id)
);
```

Generate file with needed data:
```
$ npm generateFile
```

Start server:
```
$ npm run dev
```

Send data to db:
```
$ npm sendData
```
> Tips: to send data to db at first you should start server

- Lab3 on branch: lab3

Start frontend:
```
$ npm start dev
```
> Visit http://localhost:8080


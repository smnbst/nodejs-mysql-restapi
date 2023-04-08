CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employees (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

insert into employees value(1,'Joe', 1000),
                            (2, 'Frank', 2000),
                            (3, 'Will', 3000),
                            (4, 'Mark', 4000);
                        


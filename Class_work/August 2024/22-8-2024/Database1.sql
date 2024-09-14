-- To Show Database
    SHOW DATABASES;

-- To save Data
    commit;

-- To show the Structure of table
    show columns in python30;
            -- OR
    desc python30;      

-- To show Current Table
    SELECT * FROM PYTHON30;
    
-- To Create Database
    CREATE DATABASE tops_database;

-- To Create new Table 
CREATE TABLE PYTHON30(
    -- Primary key is Constraint the data Uniquely
    -- Auto_Increament is autometically increment the id
    -- Unique key is 
    ID INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    NAME VARCHAR(40),MOBILE BIGINT UNIQUE KEY,
    EMAIL VARCHAR(100) UNIQUE KEY
);

-- To Insert Values in table 
 INSERT INTO PYTHON30(ID,NAME,MOBILE,EMAIL)VALUES
    (1,"UDIT",7990050104,"URRANA1512@GMAIL.COM");   -- Enter ID where its start

INSERT INTO PYTHON30(NAME, MOBILE, EMAIL)VALUES
    ("DHRUVIL",7880050104,"DHRUVIL@GMAIL.COM"),
    ("ROHAN",1234567892,"ROHAN@GMAIL.COM"),
    ("PREM",9876543215,"PREM@GMAIL.COM"),
    ("VRAJ",2316584795,"VRAJ@GMAIL.COM"),
    ("MAHESH",4567893215,"MAHESH@GMAIL.COM"); 

-- To Add new Column in Table
    ALTER TABLE PYTHON30 ADD COLUMN CITY VARCHAR(40);

-- To Update Fields in Table
    UPDATE PYTHON30 SET NAME="DHRUVI" WHERE ID=7;
    UPDATE PYTHON30 SET CITY="AHMEDABAD" WHERE ID=1;
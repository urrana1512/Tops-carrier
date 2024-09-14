-- Foreign Key : 
    -> Relation(connect) between 2 Tables in same Database

        command : CREATE TABLE TABLE2(
            SID INT PRIMARY KEY AUTO_INCREMENT,
            SNAME VARCHAR(40),
            SFID INT, FOREIGN KEY(SFID) REFERENCES TABLE1(ID)
        );

-- Joints : 
    (1) Inner Join
    (2) Left Join
    (3) Right Join
    (4) Full Join
    (5) Outer Join

    command : SELECT TABLE1.NAME , TABLE1.EMAIL , TABLE2.SNAME FROM TABLE1 INNER   
              JOIN TABLE2 ON TABLE1.ID=TABLE2.SFID
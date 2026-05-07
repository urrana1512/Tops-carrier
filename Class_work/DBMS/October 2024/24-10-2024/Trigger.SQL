Create Table trigger_3(
    tid int,
    tname varchar(20),
    tsubject varchar(50),
    ttime timestamp,
    action_perform varchar(100) 
);

-- Trigger Update
Create table Trigger_4 before UPDATE on zometo for each row
Insert into Trigger_3(tid, tname, tsubject, action_perform) values (old.id, old.name, old.subject, "Data Updated");

UPDATE PYTHON30 SET NAME="Udit" WHERE ID=2;

-- Trigger Insert
Create table Trigger_4 before UPDATE on zometo for each row
Insert into Trigger_3(tid, tname, tsubject, action_perform) values (old.id, old.name, old.subject, "Data Inserted"); 
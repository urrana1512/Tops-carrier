Create Table trigger_1(
    tid int,
    tname varchar(20),
    temail varchar(50),
    tprice int,
    ttime timestamp,
    action_perform varchar(100) 
);

-- DELETE TRIGGER
Create Trigger trigger_2 before delete on zometo for each row 
insert into trigger_1 (tid, tname, temail, tprice, action perform) values (old.id, old.name, old.email, old.price, "Data Deleted");
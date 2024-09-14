-- delete Query

-- DELETE : Single column
command : DELETE FROM student where id=3; //single row

-- TRUNCATE : table but structure remainning same 
TRUNCATE Table student; // Whole table
delete from student;    // whole table

-- DROP : remove the whole database
DROP database student;  // whole database

-- delete Query


-- Query of Fetching

select * from student;
select * from student where id=1;
select name,city from student;
select name,city from student where id=3;

--  Query of Fetching


-- Like Operator

select * from student where city like 'V%';     -- 1st letter V
select * from student where city like '%a';     -- last letter a
select * from student where city like '_a%';    -- 2nd letter a

-- Like Operator


--  Order by 

select * from student Order by price ASC;
select * from student Order by price DESC;

--  Order by 
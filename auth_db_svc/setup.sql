CREATE USER 'nerv'@'%' IDENTIFIED with mysql_native_password BY 'evangelion';
GRANT ALL PRIVILEGES ON * . * TO 'nerv'@'%';
FLUSH PRIVILEGES;
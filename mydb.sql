drop DATABASE if exists mydb;
create database if not exists mydb;
use mydb;

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    correo VARCHAR(100)
);

INSERT INTO usuarios (nombre, correo) 
VALUES ('Maria López','maria@example.com'),
	('Pedro Gomez','pedro@example.com'),
    ('Ana Martínez','ana@example.com')

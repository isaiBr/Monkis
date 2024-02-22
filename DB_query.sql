drop table if exists familiar;
drop table  if exists usuario;
drop table if exists persona;
drop table if exists relacion;
drop table if exists nacionalidad;

create table nacionalidad(
	id int auto_increment PRIMARY KEY,
	descripcion varchar(100)
);

create table relacion(
	id int auto_increment PRIMARY KEY,
    descripcion varchar(100)
);

create table persona(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombres varchar(100),
    apellido_paterno varchar(50),
    apellido_materno varchar(50),
    fecha_nacimiento DATETIME,
    celular char(9),
    foto BLOB,
    id_nacionalidad int,
    FOREIGN KEY (id_nacionalidad)REFERENCES nacionalidad(id)
);

create table usuario(
	id INT AUTO_INCREMENT PRIMARY KEY,
    correo varchar(100),
    pass varchar(100),
    id_persona int,
    FOREIGN KEY (id_persona) REFERENCES persona(id)
);

create table familiar(
	ID INT AUTO_INCREMENT PRIMARY KEY,
    id_persona int,
    id_relacion int,
    id_principal int,
    FOREIGN KEY (id_persona)REFERENCES persona(id),
    FOREIGN KEY (id_relacion) REFERENCES relacion(id),
    FOREIGN KEY (id_principal) REFERENCES usuario(id)
);

INSERT INTO nacionalidad (descripcion) values ('Peruano');
INSERT INTO nacionalidad (descripcion) values ('Argentino');
INSERT INTO nacionalidad (descripcion) values ('Mexicano');

INSERT INTO relacion (descripcion) values ('Monkinovio');
INSERT INTO relacion (descripcion) values ('Hijo');
INSERT INTO relacion (descripcion) values ('Sobrina');

INSERT INTO persona (nombres, apellido_paterno, apellido_materno, fecha_nacimiento, celular, foto, id_nacionalidad)
VALUES ('Maria', 'Espezua', 'Valenzuela', '2001-12-20 08:30:00', '934869864', NULL, 1);

INSERT INTO persona (nombres, apellido_paterno, apellido_materno, fecha_nacimiento, celular, foto, id_nacionalidad)
VALUES ('Isai Enrique', 'Bravo', 'Sierra', '2002-03-14 08:30:00', '934869864', NULL, 1);
INSERT INTO persona (nombres, apellido_paterno, apellido_materno, fecha_nacimiento, celular, foto, id_nacionalidad)
VALUES ('Xico', null, null, '2002-03-14 08:30:00', '934869864', NULL, 1);
INSERT INTO persona (nombres, apellido_paterno, apellido_materno, fecha_nacimiento, celular, foto, id_nacionalidad)
VALUES ('tomi', null, null, '2002-03-14 08:30:00', '934869854', NULL, 1);
INSERT INTO persona (nombres, apellido_paterno, apellido_materno, fecha_nacimiento, celular, foto, id_nacionalidad)
VALUES ('Centi', null, null, '2002-03-14 08:30:00', '934869864', NULL, 1);

INSERT INTO Usuario (correo, pass, id_persona) VALUES ('maje@gmail.com', '1234',1);

INSERT INTO Familiar(id_persona, id_relacion, id_principal) VALUES (2,1,1);

select * from relacion;
select * from persona;
select * from familiar;
select * from nacionalidad;

delete from familiar where id=2;
ALTER TABLE familiar AUTO_INCREMENT=2;
delete from Persona where id in (5,6,7,8);
ALTER TABLE Persona AUTO_INCREMENT = 5;








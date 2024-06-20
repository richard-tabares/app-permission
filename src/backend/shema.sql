create database permissions;

USE permissions;

create table user(
    idUser bigint primary key,
    name varchar(255) not null,
    email varchar(255) not null,
    position varchar(255) not null,
    role varchar(255) not null,
    wappNumber varchar(255) not null,
    sign text not null,
    initDate date not null
);

create table permissions(
    idPermission bigint primary key auto_increment,
    idUser bigint,
    foreign key (idUser) references user(idUser) on delete cascade,
    date date,
    description text not null,
    state varchar(255)
);

create table certificates(
    idCertificate bigint primary key auto_increment,
    idUser bigint,
    foreign key (idUser) references user(idUser) on delete cascade,
    date date,
    state varchar(255)
);

create table company(
    idCompany bigint primary key,
    name varchar(255) not null,
    address varchar(255) not null,
    logo varchar(255) not null,
    city varchar(255) not null,
    department varchar(255) not null
);

-- Informacion de usuario
insert into user(idUser,name,email,position,role,wappNumber,sign,initDate)
values
(1017155071,'Richard Tabares B','richardtabaresb@gmail.com','Coordinador de Sistemas','admin','3122200815','none','2020-12-29'),
(43273772,'Alejandra Lopez','alejalopez825@gmail.com','Coordinador Logística','jefe','3206479238','none','2023-10-01'),
(123456790,'Jhonnatan Tabares','johnnatant@gmail.com','Coordinador Sistemas','empleado','3147809980','none','2023-09-01')

--Informacion de permisos
insert into permissions(idUser,date,description,state)
values
(123456790,'2024-06-15','Permison para cita medica en la ciudad de medellin por dos dias en las fechas de 25 y 26 de junio del presente año','Pendiente'),
(123456790,'2024-06-19','Permiso para asistir a concierto de KRAKEN','Pendiente'),
(123456790,'2024-06-20','Debo asistir a una cita odontologicas en la cuidad de medellin','Pendiente'),
(123456790,'2024-06-23','Se hace extensa la solictud para sacar mis vacacion en los mesese de julio y agosto','Pendiente'),
(123456790,'2024-06-10','Necesito ausentarme en las horas de la tarde para un evento en el teatro con mi familia','Pendiente')

--Informacion de certificados
insert into certificates(idUser,date,state)
values
(123456790,'2024-06-15','Pendiente'),
(123456790,'2024-06-19','Pendiente'),
(123456790,'2024-06-20','Pendiente'),
(123456790,'2024-06-23','Pendiente'),
(123456790,'2024-06-10','Pendiente')

--infomracion de empresa
insert into company (idCompany,name,address,logo,city,department)
values
(890985092,'Alcaldía de Remedios','Calle las palmas','none','Remedios','Antioquia')
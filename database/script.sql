use `cadastro_medico`;

create table if not exists `cadastros`(
id int auto_increment PRIMARY KEY,

nome varchar(255),
crm varchar(255),
telefone varchar(255),
celular varchar(255),
cep varchar(255),
logradouro varchar(255),
numero varchar(255),
complemento varchar(255),
cidade varchar(255),
estado varchar(255),
especialidade varchar(255)
); 

INSERT INTO cadastros (nome, crm, telefone, celular, cep, logradouro, numero, complemento, cidade, estado, especialidade) values
('Bruno','010203', '119835156', '1198321524', '07150020', 'rua guapé', '990', 'casa2', 'guarulhos', 'sp', 'pediatra' );



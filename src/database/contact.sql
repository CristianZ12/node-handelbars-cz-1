CREATE DATABASE contact_handelbars_mysql_1;

USE contact_handelbars_mysql_1;

CREATE TABLE Contact (
    idContact INT(9) NOT NULL,
    nameContact VARCHAR(70) NOT NULL,
    addressContact VARCHAR(150) NOT NULL,
    phoneContact INT(7) NOT NULL,
    createAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE Contact 
    ADD CONSTRAINT tbl_contact_idContact_PK PRIMARY KEY (idContact);

ALTER TABLE Contact
    MODIFY idContact INT(9) NOT NULL AUTO_INCREMENT;

DESCRIBE Contact;

BEGIN;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS inventory CASCADE;
DROP TABLE IF EXISTS ownership CASCADE;
CREATE TABLE users (
     id serial PRIMARY KEY,
     name varchar(30) NOT NULL,
     hashed_password varchar NOT NULL
);
INSERT INTO users (name, hashed_password)
     VALUES ('Jon', 'PasswordJon'), ('Aria', 'PasswordAria'), ('Hodor', 'PasswordHodor'), ('Kevin', 'PasswordKevin');
COMMIT;


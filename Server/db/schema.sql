CREATE DATABASE greener;

USE greener;

CREATE TABLE cities (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  img_uri varchar(20),
  PRIMARY KEY (id)
);

CREATE TABLE zips (
  id INT NOT NULL AUTO_INCREMENT,
  zip INT NOT NULL,
  city VARCHAR(50),
  PRIMARY KEY (id)
)

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  home_street varchar(100),
  home_city varchar(100),
  home_zip varchar(10),
  work_street varchar(100),
  work_city varchar(100),
  work_zip varchar(10),
  home_city_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (home_city_id) REFERENCES cities(id)
);

CREATE TABLE likes (
  id int NOT NULL AUTO_INCREMENT,
  user_id int,
  city_id int,
  PRIMARY KEY (ID),
  FOREIGN KEY (city_id) REFERENCES cities(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
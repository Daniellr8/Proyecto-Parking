CREATE DATABASE db_links

USE db_links

CREATE TABLE users(
    id  INT(11) not NULL ,
    username VARCAHR(16) NOT NULL,
    password VARCAHR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
)


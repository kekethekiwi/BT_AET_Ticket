CREATE DATABASE IF NOT EXISTS aet_tickets;
CREATE TABLE IF NOT EXISTS aet_tickets.locations(
  id SMALLINT(7) UNSIGNED,
  city VARCHAR(50),
  country VARCHAR(50),
  attraction_id_list TEXT(65535)
);

LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/data_files/locations.csv'
INTO TABLE aet_tickets.locations
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(id,city,country,attraction_id_list);


CREATE TABLE IF NOT EXISTS aet_tickets.attractions(
  `name` VARCHAR(50),
  price SMALLINT(7) UNSIGNED,
  age_range SMALLINT(7) UNSIGNED,
  activity_type VARCHAR(50),
  `address` TEXT(65535), 
  time_spent SMALLINT (7),
  id SMALLINT(7),
  cid SMALLINT(7),
  `date` TEXT(65535),
  time_of_day TEXT(65535)
);

LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/data_files/attractions.csv'
INTO TABLE aet_tickets.attractions
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(name,price,age_range,activity_type,address, time_spent,id,cid,date,time_of_day);


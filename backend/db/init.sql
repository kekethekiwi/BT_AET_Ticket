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
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(id,city,country,attraction_id_list);


CREATE TABLE IF NOT EXISTS aet_tickets.attractions(
  id, SMALLINT(7),
  `name` VARCHAR(50),
  price_low SMALLINT(7) UNSIGNED,
  price_high SMALLINT(7) UNSIGNED,
  age_low SMALLINT(7) UNSIGNED,
  age_high SMALLINT(7) UNSIGNED,
  activity_type VARCHAR(50),
  `address` TEXT(65535), 
  time_spent SMALLINT (7),
  cid SMALLINT(7),
  `date` TEXT(65535),
  time_of_day TEXT(65535)
);

LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/data_files/attractions.csv'
INTO TABLE aet_tickets.attractions
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(id,name,price_low,price_high,age_low,age_high,activity_type,address,time_spent,cid,date,time_of_day);


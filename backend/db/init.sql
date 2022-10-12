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


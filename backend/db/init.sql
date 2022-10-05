CREATE DATABASE knights;
use knights;

CREATE TABLE locations (
  city_name VARCHAR(50),
  state VARCHAR(50),
  id SMALLINT(7) UNSIGNED
);

INSERT INTO locations
  (city_name, state, id)
VALUES
  ('Denver', 'Colorado', 1),
  ('Dallas', 'Texas', 2), 
  ('New York', 'New York', 3)
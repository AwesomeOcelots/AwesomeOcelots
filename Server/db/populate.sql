USE greener;

INSERT cities (name) 
VALUES ('San Franscisco'), ('Los Angeles'), ('New York City'), ('London'), ('Paris');

INSERT city_rotation (id, name) 
VALUES (3, 'New York City'), (4, 'London'), (5, 'Paris')

INSERT zips (zip, city_name, city_id) 
VALUES (94102, 'San Francisco', 1), 
(94118, 'San Francisco', 1), 
(90013, 'Los Angeles', 2);


INSERT users (home_street, home_city, home_zip, work_street, work_city, work_zip, home_city_id) 
VALUES ('market street', 'San Francisco', '94102', 'work street', 'work city', 'work zip', (SELECT id FROM zips WHERE(zip = '94102'))),
('home street', 'home city', 'home zip', 'work street', 'work city', 'work zip', '1'),
('home street', 'home city', 'home zip', 'work street', 'work city', 'work zip', '2'),
('home street', 'home city', 'home zip', 'work street', 'work city', 'work zip', '2'),
('home street', 'home city', 'home zip', 'work street', 'work city', 'work zip', '3'),
('home street', 'home city', 'home zip', 'work street', 'work city', 'work zip', '3'),
('home street', 'home city', 'home zip', 'work street', 'work city', 'work zip', '4'),
('home street', 'home city', 'home zip', 'work street', 'work city', 'work zip', '4'),
('home street', 'home city', 'home zip', 'work street', 'work city', 'work zip', '5'),
('home street', 'home city', 'home zip', 'work street', 'work city', 'work zip', '5');

INSERT likes (user_id, city_id) 
VALUES (1, 2),
(1, 3),
(2, 4),
(3, 2),
(3, 1),
(4, 1),
(4, 3),
(5, 4),
(5, 2),
(6, 2),
(6, 2),
(7, 1),
(7, 3),
(8, 3),
(8, 3),
(9, 2),
(9, 2),
(10, 2),
(10, 4),
(10, 1);
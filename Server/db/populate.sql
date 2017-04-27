USE greener;

INSERT cities (name) 
VALUES ('San Franscisco'), ('Los Angeles'), ('New York City'), ('London'), ('Paris');

INSERT users (home_addr, work_addr, home_city_id) 
VALUES ('A home address', 'A work address', '1'),
('A home address', 'A work address', '1'),
('A home address', 'A work address', '2'),
('A home address', 'A work address', '2'),
('A home address', 'A work address', '3'),
('A home address', 'A work address', '3'),
('A home address', 'A work address', '4'),
('A home address', 'A work address', '4'),
('A home address', 'A work address', '5'),
('A home address', 'A work address', '5');

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
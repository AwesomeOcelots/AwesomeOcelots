// Here are some sample mySQL queries we used to test the v1 db

// Insert a list of cities (without img uri)
INSERT cities (name) VALUES ('Los Angeles'), ('New York City'), ('London'), ('Paris');

// Insert a new user
INSERT users (home_addr, work_addr, home_city_id) VALUES ('A home address', 'A work address', (SELECT id FROM cities WHERE name = 'Los Angeles'));

// Insert a new like given a user id and a city name
INSERT likes (user_id, city_id) VALUES (1, (SELECT id FROM cities WHERE name = 'New York City'));

// Get list of a user’s liked cities
SELECT name FROM cities, likes WHERE cities.id = likes.city_id AND likes.user_id = '1';

// Get count of likes for city
SELECT COUNT(likes.id) FROM likes, cities WHERE city_id = cities.id AND name = 'New York City';

// Get likes count for all cities
SELECT name, COUNT(likes.id) FROM likes, cities WHERE city_id = cities.id GROUP BY name;

// Get city with the most likes
SELECT name, COUNT(likes.id) AS count FROM likes, cities WHERE city_id = cities.id GROUP BY name ORDER BY count DESC LIMIT 1;

// ^ but get just the city name
SELECT name FROM (SELECT name, COUNT(likes.id) AS count FROM likes, cities WHERE city_id = cities.id GROUP BY name ORDER BY count DESC LIMIT 1) AS counted;

// Get count of likes from people in city A for city B
SELECT name, COUNT(likes.id) FROM users, likes, cities WHERE cities.id = city_id AND user_id = users.id AND home_city_id = 1 AND name = 'Paris' GROUP BY name;

// Get most popular city for people from a specific city
SELECT name, COUNT(likes.id) as count FROM users, likes, cities WHERE cities.id = city_id AND user_id = users.id AND home_city_id = 1 GROUP BY name ORDER BY count DESC LIMIT 1;

CREATE TABLE `event_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `events` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `category_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `geo_lat` varchar(255) NOT NULL,
  `geo_lng` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `place` varchar(255) NOT NULL,
  `date` DATETIME NOT NULL,
  `price` varchar(20),
  `owner_id` int NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (owner_id) REFERENCES users(id),
  FOREIGN KEY (category_id) REFERENCES event_type (id)
);

CREATE TABLE users(
`id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
`username` varchar(50) NOT NULL,
`password` varchar(300) NOT NULL, 
`name` varchar(200) NOT NULL, 
`email` varchar(300) NOT NULL
); 

CREATE TABLE user_attends(
`id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
`user_id` int NOT NULL,
`event_id` int NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (event_id) REFERENCES events(id)
);

CREATE TABLE user_preferences(
`id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
`user_id` int NOT NULL,
`event_type_id` int NOT NULL,
`preference_number` TINYINT NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (event_type_id) REFERENCES event_type(id)
);


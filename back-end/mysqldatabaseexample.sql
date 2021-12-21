CREATE TABLE `event_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

INSERT INTO `event_type` (`id`, `name`) VALUES
(1, 'Technology'),
(2, 'Languages'),
(3, 'Cooking'),
(4, 'Social'),
(5, 'Career'),
(6, 'Sports'),
(7, 'Music'),
(8, 'Science'),
(9, 'Science');

CREATE TABLE `events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `geo` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `place` varchar(255) NOT NULL,
  `date` DATETIME NOT NULL,
  `price` varchar(20),
  `owner` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (category_id) REFERENCES event_type (id)
);

CREATE TABLE users(
`user_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
`username` varchar(50) NOT NULL,
`password` varchar(300) NOT NULL, 
`name` varchar(200) NOT NULL, 
`email` varchar(300) NOT NULL,
`event_attends` varchar(100),
`event_manages` varchar(100)
); 
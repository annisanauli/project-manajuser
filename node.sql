-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2020 at 12:11 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node`
--

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `role` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `role`) VALUES
(1, 'Role 1'),
(2, 'Role 2'),
(3, 'Role 3');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` bigint(20) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `phone`, `roleId`) VALUES
(1, 'Malena Morgan', 'malena@mail.com', 'abc', 123456789, 1),
(2, 'Heli', 'helilili@gmail.com', 'abc', 895413830776, 2),
(3, 'maemunah', 'maeeee@gmail.com', 'abc', 8962361444, 2),
(5, 'anisa nauli', 'naulii@gmail.com', 'ksf', 71823839, 2),
(6, 'kartika', 'tikasft@gmail.com', 'abc', 831923913, 1),
(7, 'jaenab', 'jajaenab@gmail.com', 'abc', 892342472, 1),
(8, 'satrio krisna ', 'satrio12@gmail.com', 'jnsds', 23898324, 2),
(9, 'aisyahh', 'aais@gmail.com', 'abc', 938931, 1),
(10, 'habibie ainun', 'habibia@gmail.com', 'abc', 19238928, 1),
(11, 'rizqi kartika s', 'kartikasss@gmail.com', 'abc', 238273921, 1),
(12, 'maudy ayunda', 'maudy@gmail.com', 'abc', 89137823423, 1),
(13, 'selena gomez', 'selena77@gmail.com', 'abc', 123898293, 1),
(14, 'laila nur laili', 'lali@gmail.com', 'abd', 93829203, 1),
(15, 'sudono', 'dono@gmail.com', 'weqwew', 981938, 1),
(16, 'syahrini', 'syahrini@gmail.com', 'dsdsf', 2492482, 3),
(17, 'malinka', 'malin@gmail.com', 'abds', 34335345, 1),
(18, 'Jubaedah', 'jubaedah@gmail.com', 'abc', 872294, 3),
(19, 'Wulan', 'wulan@gmail.com', 'abc', 878282, 3),
(20, 'milea', 'milea@gmail.com', 'jsdssd', 2382742, 1),
(21, 'Rio ', 'rrrrrio@gmail.com', 'djdjwwd', 8234234, 2),
(23, 'mahmud', 'mahmud@gmail.com', 'heduewdw', 928429740242, 3),
(24, 'aryo gusman', 'aryogg@gmail.com', 'ewwendwe', 892347246, 2),
(26, 'siwon', 'siwon@gmail.com', 'sdnfsf', 24478422, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roleId` (`roleId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

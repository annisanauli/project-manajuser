-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2020 at 10:25 AM
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
-- Database: `manajuser_db`
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
(1, 'Umi Kalsum', 'umikalsum12@gmail.com', 'abcde.1', 8325723223, 1),
(2, 'Govinda', 'gege@gmail.com', 'abcde', 89227469556, 2),
(3, 'Rizqi Kartika', 'rkartika@gmail.com', 'abcde', 8563890342, 2),
(4, 'Huwaida', 'huwaida76@gmail.com', 'abcd', 892242421, 2),
(5, 'Haruka', 'haruka@gmail.com', 'nbsd', 8278493356, 3),
(6, 'Annisa Nauli', 'annisa@gmail.com', 'adad', 85138230534, 3),
(7, 'Anggini', 'anggi77@gmail.com', 'adss', 8763249042, 2),
(8, 'Satrio Krisna', 'satsatrio@gmail.com', 'abcd', 8702494545, 1),
(26, 'Syanum Sanala', 'syanum', 'dsd', 894284742, 1),
(28, 'Ananta M', 'anantamhd@gmail.com', 'abcds', 8589347134, 3),
(29, 'Syalala', 'lala@gmail.com', 'acd', 821083493, 2),
(30, 'Kartika Safitri', 'kartika@gmail.com', 'adas', 8962382327, 1),
(31, 'Lala Lili', 'lalali@gmail.com', 'asba', 872354546, 2),
(32, 'LalaLili', 'lalali@gmail.com', 'asba', 872354546, 2),
(34, 'Maemunah maysaroh', 'maekk@gmail.com', 'abc', 8762323443, 1),
(36, 'Aryo gusman', 'aryog@gmail.com', 'adad', 821932483, 1),
(37, 'Amanda Rawles', 'amndarw@gmail.com', 'asdd', 8932492435, 1);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

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

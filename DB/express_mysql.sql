-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 28, 2023 at 12:07 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express_mysql`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblusers`
--

DROP TABLE IF EXISTS `tblusers`;
CREATE TABLE IF NOT EXISTS `tblusers` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(225) NOT NULL,
  `email` varchar(225) NOT NULL,
  `address` varchar(225) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblusers`
--

INSERT INTO `tblusers` (`id`, `name`, `email`, `address`) VALUES
(1, 'Jafar22 muaakatata', 'barbarosa@gmail.com', 'Wonogiri, Jawa Barat'),
(2, 'Giyu Tamioka', 'giyutamioka@gmail.com', 'Konoha gakure '),
(4, 'Maman surahman', 'mamansurahman.com', 'demangan raya'),
(5, 'Maman surahmanxx', 'mamansurahman.com', 'demangan raya'),
(6, 'tamado tanjiro', 'saitama443@gmail.com', 'Jalan Magelang'),
(8, 'tamado tanjiro99', 'saitama4439@gmail.com', 'Jalan Magelang Raya'),
(9, 'seto langgeng wijoyo', 'setolanggengwijoyo@gmail.com', 'Pasar minggu jakarta timur'),
(10, 'Jafar muaakatata', 'berniagakuh@gmail.com', 'Jalan raya magelang'),
(11, 'Jafar muaakatata', 'berniagakuh@gmail.com', 'Jalan raya magelang');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

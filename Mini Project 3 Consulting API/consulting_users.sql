CREATE DATABASE  IF NOT EXISTS `consulting` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `consulting`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: consulting
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `consultant_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`),
  KEY `consultant_id` (`consultant_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`consultant_id`) REFERENCES `consultants` (`consultant_id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'John','Doe','john.doe@example.com','$2a$10$FInQWrI6fRZJ0DkEFXbsMO6t5.dCZCYgDbWrqAjA.IOEhb4RBxN6u',1,'2024-11-13 03:08:25','2024-11-13 15:19:27'),(2,'Jane','Smith','jane.smith@example.com','$2a$10$9ALxplsHwpqwFSIfYYJc/OpqP8JLcHCK65qLR9OyZVRzQUwmwybSG',2,'2024-11-13 03:08:25','2024-11-13 15:19:27'),(3,'Bob','Williams','bob.williams@example.com','$2a$10$5.AIQQTHCa3AfWDrwI72Y.O48kZdKWnhRdmBr7QSEnr4iWf/kor8S',4,'2024-11-13 03:08:25','2024-11-13 15:19:27'),(4,'Charlie','Brown','charlie.brown@example.com','$2a$10$z3wa/iZ.Wy/ouL6IMExQqeXHjL87Pp33G7A0nw.0OuZNrrFAsrnUy',5,'2024-11-13 03:08:25','2024-11-13 15:19:27'),(5,'David','Davis','david.davis@example.com','$2a$10$9Rs14ikQkSi8N35t9/zK3OvxjLN2i8qvNPvQZIO7Oz5Xn7HZtdt4u',6,'2024-11-13 03:08:25','2024-11-13 15:19:28'),(6,'Eve','Miller','eve.miller@example.com','$2a$10$CbXv1zkAv8V8uGrYff1l4e6bOtxswNKqVPeo2DKyyalJX6h5BuKde',7,'2024-11-13 03:08:25','2024-11-13 15:19:28'),(7,'Grace','Moore','grace.moore@example.com','$2a$10$gbjGA6S57Relt1Up1.B/LOodS.1mBTYRNs4AM8t7KzfHznSkir.TW',9,'2024-11-13 03:08:25','2024-11-13 15:19:28'),(8,'Harry','Taylor','harry.taylor@example.com','$2a$10$4iSp5dyJrFOL4yBboKpfleM78xWCP9KNGoHzEoxBJKx2ruyNlgYnK',10,'2024-11-13 03:08:25','2024-11-13 15:19:28'),(9,'Ivy','Anderson','ivy.anderson@example.com','$2a$10$pVgrqbAzOZ2.E7jBQCtJFOC0/kyYmnYXN96JDBkskxaJJ6iIX1K7G',11,'2024-11-13 03:08:25','2024-11-13 15:19:28'),(10,'Kathy','Jackson','kathy.jackson@example.com','$2a$10$dEhZcvfaJE/Gdm1japS.0eRSMxT4ie.CgbBEgqMJxJ80rzIG43bTa',13,'2024-11-13 03:08:25','2024-11-13 15:19:28'),(11,'Leo','White','leo.white@example.com','$2a$10$qLqtXx.ebXJZKLBILgPxcuUsQMVRszstge0mxQgJ1CfuHY9NdgU/O',14,'2024-11-13 03:08:25','2024-11-13 15:19:29'),(12,'Maggie','Harris','maggie.harris@example.com','$2a$10$u7n2Tnbz5wGWmwmj3ofuw.8DfGx9xMsJ3sFA.qzQExxbAApAshbuW',15,'2024-11-13 03:08:25','2024-11-13 15:19:29'),(13,'Nancy','Martin','nancy.martin@example.com','$2a$10$cwEmMSk41tHEVfnVJoEwb.gG2n8lxJnqH36AchXVaJjBvI3iXC0y.',16,'2024-11-13 03:08:25','2024-11-13 15:19:29'),(14,'Paul','Perez','paul.perez@example.com','$2a$10$xQWF7k3jyOHZ15AGtokkx.mgnyxjio9PD9EwvzsUWg/EVTe93zD8W',18,'2024-11-13 03:08:25','2024-11-13 15:19:29'),(15,'Quincy','Clark','quincy.clark@example.com','$2a$10$KmGiwtQ2eGoyqA0ULYVNjO8pHVZ5NEHdni.nYBdg75yNZ/958KqBu',19,'2024-11-13 03:08:25','2024-11-13 15:19:29'),(16,'Steve','Walker','steve.walker@example.com','$2a$10$UFEQqZeGFsbDa/NAetqWQ.N1BiAL88X13F4m6MaoS9mIRKDSzbVOK',21,'2024-11-13 03:08:25','2024-11-13 15:19:29'),(17,'Tina','Hall','tina.hall@example.com','$2a$10$iz3UzsMezKdC/zbZIA6cR.I4D1acoNLmDQaHywApc98ZIeo5zpSca',22,'2024-11-13 03:08:25','2024-11-13 15:19:29'),(18,'Uma','Allen','uma.allen@example.com','$2a$10$It0MkCnfYJk3fwp4AumoreC37IJzrbh9wrg6V15CNDX9doOukm4ri',23,'2024-11-13 03:08:25','2024-11-13 15:19:29'),(19,'Wendy','King','wendy.king@example.com','$2a$10$bFqE1XwFNgmExFRto3sDaO4sO9XWD1lkQqmp.o3sdHoVZ0D/2Tswq',25,'2024-11-13 03:08:25','2024-11-13 15:19:30'),(20,'Xander','Scott','xander.scott@example.com','$2a$10$RXlGI8G54/I.I0jq3fOTVuAAr5oQvXE19pF0G1rOvPZWBEnJdvrvi',26,'2024-11-13 03:08:25','2024-11-13 15:19:30'),(21,'Yvonne','Adams','yvonne.adams@example.com','$2a$10$7lUz5I23Vc0kh0ZBJ1g4/ek6key9xLmUNu4VC4J4GDetwk/D/Z82O',27,'2024-11-13 03:08:25','2024-11-13 15:19:30'),(22,'Zach','Baker','zach.baker@example.com','$2a$10$qHyaOuqQwsiL.21N8V4p3OvpulR/m5NJbaWlWaJQEKdlieIM6tmmy',28,'2024-11-13 03:08:25','2024-11-13 15:19:30');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-13 23:36:01

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
-- Table structure for table `consultants`
--

DROP TABLE IF EXISTS `consultants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consultants` (
  `consultant_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `hire_date` date DEFAULT NULL,
  `specialization` varchar(255) DEFAULT NULL,
  `status` enum('active','inactive','on leave') DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`consultant_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consultants`
--

LOCK TABLES `consultants` WRITE;
/*!40000 ALTER TABLE `consultants` DISABLE KEYS */;
INSERT INTO `consultants` VALUES (1,'John','Doe','john.doe@example.com','555-0101','2020-05-01','Software Engineering','active','2024-11-12 09:16:03','2024-11-12 09:16:03'),(2,'Jane','Smith','jane.smith@example.com','555-0102','2019-04-15','Data Science','active','2024-11-12 09:16:03','2024-11-12 09:16:03'),(3,'Alice','Johnson','alice.johnson@example.com','555-0103','2021-06-10','Marketing','inactive','2024-11-12 09:16:03','2024-11-12 09:16:03'),(4,'Bob','Williams','bob.williams@example.com','555-0104','2018-02-20','Human Resources','active','2024-11-12 09:16:03','2024-11-12 09:16:03'),(5,'Charlie','Brown','charlie.brown@example.com','555-0105','2020-08-25','Sales','on leave','2024-11-12 09:16:03','2024-11-12 09:16:03'),(6,'David','Davis','david.davis@example.com','555-0106','2017-11-05','Software Engineering','active','2024-11-12 09:16:03','2024-11-12 09:16:03'),(7,'Eve','Miller','eve.miller@example.com','555-0107','2021-01-12','Product Management','active','2024-11-12 09:16:03','2024-11-12 09:16:03'),(8,'Frank','Wilson','frank.wilson@example.com','555-0108','2019-09-09','UI/UX Design','inactive','2024-11-12 09:16:03','2024-11-12 09:16:03'),(9,'Grace','Moore','grace.moore@example.com','555-0109','2020-12-13','Project Management','active','2024-11-12 09:16:03','2024-11-12 09:16:03'),(10,'Harry','Taylor','harry.taylor@example.com','555-0110','2021-02-01','Customer Support','on leave','2024-11-12 09:16:03','2024-11-12 09:16:03'),(11,'Ivy','Anderson','ivy.anderson@example.com','555-0111','2022-01-30','Content Writing','active','2024-11-12 09:16:03','2024-11-12 09:16:03'),(12,'Jack','Thomas','jack.thomas@example.com','555-0112','2021-08-23','Data Analysis','inactive','2024-11-12 09:16:03','2024-11-12 09:16:03'),(13,'Kathy','Jackson','kathy.jackson@example.com','555-0113','2019-07-14','Sales','active','2024-11-12 09:16:03','2024-11-12 09:16:03'),(14,'Leo','White','leo.white@example.com','555-0114','2020-09-16','Data Science','active','2024-11-12 09:16:03','2024-11-12 09:16:03'),(15,'Maggie','Harris','maggie.harris@example.com','555-0115','2021-10-05','Software Engineering','on leave','2024-11-12 09:16:03','2024-11-12 09:16:03'),(16,'Nancy','Martin','nancy.martin@example.com','555-0116','2022-03-18','Human Resources','active','2024-11-12 09:16:03','2024-11-12 09:16:03'),(17,'Oscar','Lee','oscar.lee@example.com','555-0117','2021-07-30','Digital Marketing','inactive','2024-11-12 09:16:03','2024-11-12 09:16:03'),(18,'Paul','Perez','paul.perez@example.com','555-0118','2018-12-02','Product Management','active','2024-11-12 09:16:03','2024-11-12 09:16:03'),(19,'Quincy','Clark','quincy.clark@example.com','555-0119','2020-04-19','Legal','active','2024-11-12 09:16:03','2024-11-12 09:16:03'),(20,'Rachel','Lewis','rachel.lewis@example.com','555-0120','2021-11-11','Project Management','inactive','2024-11-12 09:16:03','2024-11-12 09:16:03'),(21,'Steve','Walker','steve.walker@example.com','555-0121','2020-07-22','Software Engineering','active','2024-11-12 09:16:03','2024-11-12 09:16:03'),(22,'Tina','Hall','tina.hall@example.com','555-0122','2019-03-10','Customer Support','active','2024-11-12 09:16:03','2024-11-12 09:16:03'),(23,'Uma','Allen','uma.allen@example.com','555-0123','2021-05-14','UI/UX Design','on leave','2024-11-12 09:16:03','2024-11-12 09:16:03'),(24,'Victor','Young','victor.young@example.com','555-0124','2021-09-08','Business Strategy','inactive','2024-11-12 09:16:03','2024-11-12 09:16:03'),(25,'Wendy','King','wendy.king@example.com','555-0125','2020-10-13','Legal','active','2024-11-12 09:16:03','2024-11-12 09:16:03'),(26,'Xander','Scott','xander.scott@example.com','555-0126','2022-02-14','Human Resources','on leave','2024-11-12 09:16:03','2024-11-12 09:16:03'),(27,'Yvonne','Adams','yvonne.adams@example.com','555-0127','2021-06-28','Content Writing','active','2024-11-12 09:16:03','2024-11-12 09:16:03'),(28,'Zach','Baker','zach.baker@example.com','555-0128','2019-01-15','Sales','active','2024-11-12 09:16:03','2024-11-12 09:16:03'),(29,'Aaron','Gonzalez','aaron.gonzalez@example.com','555-0129','2020-03-20','Project Management','inactive','2024-11-12 09:16:03','2024-11-12 09:16:03');
/*!40000 ALTER TABLE `consultants` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `after_consultant_insert` AFTER INSERT ON `consultants` FOR EACH ROW BEGIN
    -- Insert new user record from consultant data
    INSERT INTO users (first_name, last_name, email, consultant_id, created_at)
    VALUES (NEW.first_name, NEW.last_name, NEW.email, NEW.consultant_id, NEW.created_at);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `after_consultant_update` AFTER UPDATE ON `consultants` FOR EACH ROW BEGIN
    -- Update the corresponding user record when consultant's details change
    UPDATE users 
    SET first_name = NEW.first_name, 
        last_name = NEW.last_name, 
        email = NEW.email, 
        created_at = NEW.created_at  -- Optional, update created_at if needed
    WHERE consultant_id = NEW.consultant_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `after_consultant_delete` AFTER DELETE ON `consultants` FOR EACH ROW BEGIN
    -- Delete corresponding user record when consultant is deleted
    DELETE FROM users WHERE consultant_id = OLD.consultant_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-13 23:36:01

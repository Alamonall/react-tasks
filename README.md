�������� ���� ������

CREATE DATABASE `reacts` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
CREATE TABLE `task_priority` (
  `id` int NOT NULL,
  `priority_id` int NOT NULL,
  `priority_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `task_statuses` (
  `id` int NOT NULL,
  `status_id` int NOT NULL,
  `status_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `task_name` varchar(45) NOT NULL,
  `task_status` varchar(45) NOT NULL,
  `task_priority` varchar(45) NOT NULL,
  `task_pref_time_ending` date DEFAULT NULL,
  `task_real_time_ending` date DEFAULT NULL,
  `task_description` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

������� ������ � ��
INSERT INTO `reacts`.`task_priority` (`id`,`priority_id`,`priority_name`)
VALUES
('0', '1', '������'),
('1', '2', '�������'),
('2', '3', '�������');
INSERT INTO `reacts`.`task_statuses` (`id`,`status_id`,`status_name`)
VALUES
('0', '1', '�����'),
('1', '2', '� ������'),
('2', '3', '���������');

INSERT INTO `reacts`.tasks(`task_name`, `task_status`, `task_priority`, `task_pref_time_ending`, `task_real_time_ending`, `task_description`)
VALUES
('������ #1', '1', '1', '2019-02-02', NULL, '�������� ������ #1'),
('10', '������ #2', '2', '2', '2019-04-23', NULL, '�������� ������ #2'),
('11', '������ #3', '3', '3', '2019-02-16', '2019-02-18', '�������� ������ #3'),
('12', '������ #4', '3', '2', '2019-05-12', '2019-04-20', '�������� ������ #4');



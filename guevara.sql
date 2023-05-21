-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-05-2023 a las 13:59:23
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `guevara`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `ID_Alumno` int(11) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `Apellido` varchar(255) DEFAULT NULL,
  `Edad` int(11) DEFAULT NULL,
  `ID_Curso` int(11) DEFAULT NULL,
  `Ciclo_Lectivo` varchar(255) DEFAULT NULL,
  `Orientacion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`ID_Alumno`, `Nombre`, `Apellido`, `Edad`, `ID_Curso`, `Ciclo_Lectivo`, `Orientacion`)
VALUES
    (1, 'Gonzalo', 'Forneron', 17, 62, '2023', 'Tecnica'),
    (2, 'Pablo', 'Celen', 17, 61, '2023', 'Tecnica'),
    (3, 'Lucas', 'Martinez', 17, 62, '2023', 'Tecnica'),
    (4, 'Sofia', 'Gomez', 18, 62, '2023', 'Tecnica'),
    (5, 'Valentina', 'Lopez', 18, 62, '2023', 'Tecnica'),
    (6, 'Facundo', 'Fernandez', 17, 62, '2023', 'Tecnica'),
    (7, 'Camila', 'Rodriguez', 17, 62, '2023', 'Tecnica'),
    (8, 'Agustin', 'Perez', 17, 62, '2023', 'Tecnica'),
    (9, 'Martina', 'Garcia', 18, 62, '2023', 'Tecnica'),
    (10, 'Joaquin', 'Sanchez', 18, 62, '2023', 'Tecnica'),
    (11, 'Isabella', 'Fernandez', 17, 62, '2023', 'Tecnica'),
    (12, 'Sebastian', 'Martinez', 17, 62, '2023', 'Tecnica'),
    (13, 'Julia', 'Gomez', 17, 62, '2023', 'Tecnica'),
    (14, 'Leonardo', 'Lopez', 18, 62, '2023', 'Tecnica'),
    (15, 'Renata', 'Forneron', 18, 62, '2023', 'Tecnica'),
    (16, 'Matias', 'Celen', 17, 62, '2023', 'Tecnica'),
    (17, 'Valeria', 'Sanchez', 17, 62, '2023', 'Tecnica'),
    (18, 'Gabriel', 'Perez', 17, 62, '2023', 'Tecnica'),
    (19, 'Catalina', 'Garcia', 18, 62, '2023', 'Tecnica'),
    (20, 'Maximiliano', 'Rodriguez', 18, 62, '2023', 'Tecnica'),
    (21, 'Florencia', 'Martinez', 17, 62, '2023', 'Tecnica'),
    (22, 'Lautaro', 'Fernandez', 17, 62, '2023', 'Tecnica'),
    (23, 'Diego', 'Gomez', 17, 61, '2023', 'Tecnica'),
    (24, 'Ana', 'Lopez', 18, 61, '2023', 'Tecnica'),
    (25, 'Jorge', 'Perez', 18, 61, '2023', 'Tecnica'),
    (26, 'Mariana', 'Garcia', 17, 61, '2023', 'Tecnica'),
    (27, 'Andres', 'Rodriguez', 17, 61, '2023', 'Tecnica'),
    (28, 'Carla', 'Fernandez', 17, 61, '2023', 'Tecnica'),
    (29, 'Federico', 'Sanchez', 18, 61, '2023', 'Tecnica'),
    (30, 'Lorena', 'Perez', 18, 61, '2023', 'Tecnica'),
    (31, 'Hernan', 'Garcia', 17, 61, '2023', 'Tecnica'),
    (32, 'Melina', 'Rodriguez', 17, 61, '2023', 'Tecnica'),
    (33, 'Luciano', 'Fernandez', 17, 61, '2023', 'Tecnica'),
    (34, 'Antonella', 'Lopez', 18, 61, '2023', 'Tecnica'),
    (35, 'Ivan', 'Perez', 18, 61, '2023', 'Tecnica'),
    (36, 'Natalia', 'Garcia', 17, 61, '2023', 'Tecnica'),
    (37, 'Ezequiel', 'Rodriguez', 17, 61, '2023', 'Tecnica'),
    (38, 'Sol', 'Fernandez', 17, 61, '2023', 'Tecnica'),
    (39, 'Santiago', 'Sanchez', 18, 61, '2023', 'Tecnica'),
    (40, 'Sabrina', 'Perez', 18, 61, '2023', 'Tecnica'),
    (41, 'Alan', 'Garcia', 17, 61, '2023', 'Tecnica'),
    (42, 'Milena', 'Rodriguez', 17, 61, '2023', 'Tecnica');
    -- Agrega más registros aquí


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso`
--

CREATE TABLE `curso` (
  `ID_Curso` int(11) NOT NULL,
  `Anio` int(11) DEFAULT NULL,
  `Division` varchar(255) DEFAULT NULL,
  `ID_Preceptor` int(11) DEFAULT NULL,
  `Modalidad` varchar(255) DEFAULT NULL,
  `Turno` varchar(255) DEFAULT NULL,
  `Cantidad_Alumnos` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `curso`
--

INSERT INTO `curso` (`ID_Curso`, `Anio`, `Division`, `ID_Preceptor`, `Modalidad`, `Turno`, `Cantidad_Alumnos`)
VALUES
    (11, 1, 'primera', 1, 'tecnica', 'mañana', 20),
    (12, 1, 'segunda', 1, 'tecnica', 'mañana', 21),
    (13, 1, 'tercera', 1, 'tecnica', 'mañana', 22),
    (14, 1, 'cuarta',  1, 'tecnica', 'mañana', 23),
    (21, 2, 'primera', 2, 'tecnica', 'mañana', 20),
    (22, 2, 'segunda', 2, 'tecnica', 'mañana', 21),
    (23, 2, 'tercera', 2, 'tecnica', 'mañana', 22),
    (24, 2, 'cuarta',  2, 'tecnica', 'mañana', 23),
    (31, 3, 'primera', 3, 'tecnica', 'mañana', 20),
    (32, 3, 'segunda', 3, 'tecnica', 'mañana', 21),
    (33, 3, 'tercera', 3, 'tecnica', 'mañana', 22),
    (34, 3, 'cuarta',  3, 'tecnica', 'mañana', 23),
    (41, 4, 'primera', 4, 'tecnica', 'vespertino', 20),
    (42, 4, 'segunda', 4, 'tecnica', 'vespertino', 21),
    (43, 4, 'tercera', 4, 'tecnica', 'vespertino', 22),
    (44, 4, 'cuarta',  4, 'tecnica', 'vespertino', 23),
    (51, 5, 'primera', 5, 'tecnica', 'vespertino', 20),
    (52, 5, 'segunda', 5, 'tecnica', 'vespertino', 21),
    (53, 5, 'tercera', 5, 'tecnica', 'vespertino', 22),
    (54, 5, 'cuarta',  5, 'tecnica', 'vespertino', 23);
    (61, 6, 'primera', 6, 'tecnica', 'vespertino', 23),
    (62, 6, 'segunda', 6, 'tecnica', 'vespertino', 22);
    (63, 6, 'tercera', 6, 'tecnica', 'vespertino', 22);
    (71, 7, 'primera', 7, 'tecnica', 'vespertino', 22);
    (72, 7, 'segunda', 7, 'tecnica', 'vespertino', 22);


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso_materias`
--

CREATE TABLE `curso_materias` (
  `ID_Curso` int(11) DEFAULT NULL,
  `ID_Materia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `curso_materias`
--

INSERT INTO `curso_materias` (`ID_Curso`, `ID_Materia`) VALUES
(61, 1),
(61, 2),
(61, 3),
(61, 4),
(61, 5),
(61, 6),
(61, 7),
(61, 8),
(61, 9),
(61, 10),
(61, 11),
(61, 12),
(61, 13),
(61, 14),
(62, 1),
(62, 2),
(62, 3),
(62, 4),
(62, 5),
(62, 6),
(62, 7),
(62, 8),
(62, 9),
(62, 10),
(62, 11),
(62, 12),
(62, 13),
(62, 14);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

CREATE TABLE `materias` (
  `ID_Materia` int(11) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `id_profesor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `materias`
--

INSERT INTO `materias` (`ID_Materia`, `Nombre`, `id_profesor`) VALUES
(1, 'Practicas del lenguaje', 1),
(2, 'Quimica', 2),
(3, 'Ingles', 3),
(4, 'Filosofia', 4),
(5, 'Matematicas 3', 5),
(6, 'Tecnologia de gestion', 6),
(7, 'Software 3', 7),
(8, 'Hardware', 7),
(9, 'Asistencia', 8),
(10, 'Redes 2', 9),
(11, 'Programacion 3', 10),
(12, 'Practicas profesionalizantes', 7),
(13, 'Educacion fisica', 11),
(14, 'EDI - Invernadero', 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notas`
--

CREATE TABLE `notas` (
  `ID_Nota` int(11) NOT NULL,
  `ID_Alumno` int(11) DEFAULT NULL,
  `ID_Materia` int(11) DEFAULT NULL,
  `Nota` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `notas`
--

INSERT INTO `notas` (`ID_Nota`, `ID_Alumno`, `ID_Materia`, `Nota`) VALUES
(1, 1, 1, '5.00'),
(2, 1, 2, '9.00'),
(3, 1, 3, '3.00'),
(4, 1, 4, '8.00'),
(5, 1, 5, '2.00'),
(6, 1, 6, '7.00'),
(7, 1, 7, '4.00'),
(8, 1, 8, '6.00'),
(9, 1, 9, '10.00'),
(10, 1, 10, '1.00'),
(11, 1, 11, '7.00'),
(12, 1, 12, '4.00'),
(13, 1, 13, '6.00'),
(14, 1, 14, '9.00'),
(15, 2, 1, '8.00'),
(16, 2, 2, '3.00'),
(17, 2, 3, '6.00'),
(18, 2, 4, '2.00'),
(19, 2, 5, '9.00'),
(20, 2, 6, '5.00'),
(21, 2, 7, '7.00'),
(22, 2, 8, '1.00'),
(23, 2, 9, '4.00'),
(24, 2, 10, '10.00'),
(25, 2, 11, '6.00'),
(26, 2, 12, '8.00'),
(27, 2, 13, '3.00'),
(28, 2, 14, '9.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preceptor`
--

CREATE TABLE `preceptor` (
  `ID_Preceptor` int(11) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `Apellido` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `preceptor`
--

INSERT INTO `preceptor` (`ID_Preceptor`, `Nombre`, `Apellido`) VALUES
    (1, 'John', 'Doe'),
    (2, 'Jane', 'Smith'),
    (3, 'David', 'Johnson'),
    (4, 'Emily', 'Williams'),
    (5, 'Michael', 'Brown'),
    (6, 'Ana Laura', 'Martinez');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

CREATE TABLE `profesor` (
  `ID_Profesor` int(11) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `profesor`
--

INSERT INTO `profesor` (`ID_Profesor`, `Nombre`) VALUES
(1, 'Monica Navarro'),
(2, 'Damian Valdevieso'),
(3, 'Yago Jil'),
(4, 'Manuela Martinez'),
(5, 'Marta Robledo'),
(6, 'Cinthia Peña'),
(7, 'Matias Fernandez'),
(8, 'Estefania Llauca'),
(9, 'Gabriel Kurincic'),
(10, 'Madeleine Dimauro'),
(11, 'Maria Sosa'),
(12, 'ni idea');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`ID_Alumno`),
  ADD KEY `ID_Curso` (`ID_Curso`);

--
-- Indices de la tabla `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`ID_Curso`),
  ADD KEY `ID_Preceptor` (`ID_Preceptor`);

--
-- Indices de la tabla `curso_materias`
--
ALTER TABLE `curso_materias`
  ADD KEY `ID_Curso` (`ID_Curso`),
  ADD KEY `ID_Materia` (`ID_Materia`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`ID_Materia`),
  ADD KEY `id_profesor` (`id_profesor`);

--
-- Indices de la tabla `notas`
--
ALTER TABLE `notas`
  ADD PRIMARY KEY (`ID_Nota`),
  ADD KEY `ID_Alumno` (`ID_Alumno`),
  ADD KEY `ID_Materia` (`ID_Materia`);

--
-- Indices de la tabla `preceptor`
--
ALTER TABLE `preceptor`
  ADD PRIMARY KEY (`ID_Preceptor`);

--
-- Indices de la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`ID_Profesor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumno`
--
ALTER TABLE `alumno`
  MODIFY `ID_Alumno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `curso`
--
ALTER TABLE `curso`
  MODIFY `ID_Curso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT de la tabla `notas`
--
ALTER TABLE `notas`
  MODIFY `ID_Nota` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `preceptor`
--
ALTER TABLE `preceptor`
  MODIFY `ID_Preceptor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `profesor`
--
ALTER TABLE `profesor`
  MODIFY `ID_Profesor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD CONSTRAINT `alumno_ibfk_1` FOREIGN KEY (`ID_Curso`) REFERENCES `curso` (`ID_Curso`),
  ADD CONSTRAINT `alumno_ibfk_2` FOREIGN KEY (`ID_Curso`) REFERENCES `curso` (`ID_Curso`);

--
-- Filtros para la tabla `curso`
--
ALTER TABLE `curso`
  ADD CONSTRAINT `curso_ibfk_1` FOREIGN KEY (`ID_Preceptor`) REFERENCES `preceptor` (`ID_Preceptor`),
  ADD CONSTRAINT `curso_ibfk_2` FOREIGN KEY (`ID_Preceptor`) REFERENCES `preceptor` (`ID_Preceptor`);

--
-- Filtros para la tabla `curso_materias`
--
ALTER TABLE `curso_materias`
  ADD CONSTRAINT `curso_materias_ibfk_1` FOREIGN KEY (`ID_Curso`) REFERENCES `curso` (`ID_Curso`),
  ADD CONSTRAINT `curso_materias_ibfk_2` FOREIGN KEY (`ID_Materia`) REFERENCES `materias` (`ID_Materia`),
  ADD CONSTRAINT `curso_materias_ibfk_3` FOREIGN KEY (`ID_Curso`) REFERENCES `curso` (`ID_Curso`),
  ADD CONSTRAINT `curso_materias_ibfk_4` FOREIGN KEY (`ID_Materia`) REFERENCES `materias` (`ID_Materia`);

--
-- Filtros para la tabla `materias`
--
ALTER TABLE `materias`
  ADD CONSTRAINT `materias_ibfk_1` FOREIGN KEY (`id_profesor`) REFERENCES `profesor` (`ID_Profesor`),
  ADD CONSTRAINT `materias_ibfk_2` FOREIGN KEY (`id_profesor`) REFERENCES `profesor` (`ID_Profesor`);

--
-- Filtros para la tabla `notas`
--
ALTER TABLE `notas`
  ADD CONSTRAINT `notas_ibfk_1` FOREIGN KEY (`ID_Alumno`) REFERENCES `alumno` (`ID_Alumno`),
  ADD CONSTRAINT `notas_ibfk_2` FOREIGN KEY (`ID_Materia`) REFERENCES `materias` (`ID_Materia`),
  ADD CONSTRAINT `notas_ibfk_3` FOREIGN KEY (`ID_Alumno`) REFERENCES `alumno` (`ID_Alumno`),
  ADD CONSTRAINT `notas_ibfk_4` FOREIGN KEY (`ID_Materia`) REFERENCES `materias` (`ID_Materia`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

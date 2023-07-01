-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-07-2023 a las 16:47:45
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
  `Orientacion` varchar(255) DEFAULT NULL,
  `contraseña` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`ID_Alumno`, `Nombre`, `Apellido`, `Edad`, `ID_Curso`, `Ciclo_Lectivo`, `Orientacion`, `contraseña`) VALUES
(44526072, 'Gonzalo', 'Forneron', 17, 62, '2023', 'Tecnica', 'guevara'),
(44537185, 'Valentina', 'Lopez', 18, 62, '2023', 'Tecnica', 'guevara'),
(44546217, 'Natalia', 'Garcia', 17, 61, '2023', 'Tecnica', 'guevara'),
(44546927, 'Sebastian', 'Martinez', 17, 62, '2023', 'Tecnica', 'guevara'),
(44557782, 'Federico', 'Sanchez', 18, 61, '2023', 'Tecnica', 'guevara'),
(44563057, 'Florencia', 'Martinez', 17, 62, '2023', 'Tecnica', 'guevara'),
(44568912, 'Facundo', 'Fernandez', 17, 62, '2023', 'Tecnica', 'guevara'),
(44574218, 'Isabella', 'Fernandez', 17, 62, '2023', 'Tecnica', 'guevara'),
(44575469, 'Melina', 'Rodriguez', 17, 61, '2023', 'Tecnica', 'guevara'),
(44584096, 'Lucas', 'Martinez', 17, 62, '2023', 'Tecnica', 'guevara'),
(44588197, 'Santiago', 'Sanchez', 18, 61, '2023', 'Tecnica', 'guevara'),
(44588836, 'Julia', 'Gomez', 17, 62, '2023', 'Tecnica', 'guevara'),
(44594562, 'Mariana', 'Garcia', 17, 61, '2023', 'Tecnica', 'guevara'),
(44597152, 'Ana', 'Lopez', 18, 61, '2023', 'Tecnica', 'guevara'),
(44624068, 'Sabrina', 'Perez', 18, 61, '2023', 'Tecnica', 'guevara'),
(44629482, 'Joaquin', 'Sanchez', 18, 62, '2023', 'Tecnica', 'guevara'),
(44650518, 'Carla', 'Fernandez', 17, 61, '2023', 'Tecnica', 'guevara'),
(44658293, 'Catalina', 'Garcia', 18, 62, '2023', 'Tecnica', 'guevara'),
(44670218, 'Gabriel', 'Perez', 17, 62, '2023', 'Tecnica', 'guevara'),
(44680374, 'Martina', 'Garcia', 18, 62, '2023', 'Tecnica', 'guevara'),
(44689421, 'Maximiliano', 'Rodriguez', 18, 62, '2023', 'Tecnica', 'guevara'),
(44692237, 'Luciano', 'Fernandez', 17, 61, '2023', 'Tecnica', 'guevara'),
(44695371, 'Diego', 'Gomez', 17, 61, '2023', 'Tecnica', 'guevara'),
(44696420, 'Sol', 'Fernandez', 17, 61, '2023', 'Tecnica', 'guevara'),
(44729876, 'Andres', 'Rodriguez', 17, 61, '2023', 'Tecnica', 'guevara'),
(44730461, 'Renata', 'Forneron', 18, 62, '2023', 'Tecnica', 'guevara'),
(44759986, 'Antonella', 'Lopez', 18, 61, '2023', 'Tecnica', 'guevara'),
(44780932, 'Jorge', 'Perez', 18, 61, '2023', 'Tecnica', 'guevara'),
(44809234, 'Alan', 'Garcia', 17, 61, '2023', 'Tecnica', 'guevara'),
(44816125, 'Matias', 'Celen', 17, 62, '2023', 'Tecnica', 'guevara'),
(44828153, 'Hernan', 'Garcia', 17, 61, '2023', 'Tecnica', 'guevara'),
(44851673, 'Camila', 'Rodriguez', 17, 62, '2023', 'Tecnica', 'guevara'),
(44862849, 'Lautaro', 'Fernandez', 17, 62, '2023', 'Tecnica', 'guevara'),
(44872109, 'Milena', 'Rodriguez', 17, 61, '2023', 'Tecnica', 'guevara'),
(44925683, 'Leonardo', 'Lopez', 18, 62, '2023', 'Tecnica', 'guevara'),
(44929538, 'Ivan', 'Perez', 18, 61, '2023', 'Tecnica', 'guevara'),
(44948037, 'Valeria', 'Sanchez', 17, 62, '2023', 'Tecnica', 'guevara'),
(44960787, 'Pablo', 'Celen', 17, 61, '2023', 'Tecnica', 'guevara'),
(44987204, 'Lorena', 'Perez', 18, 61, '2023', 'Tecnica', 'guevara'),
(44990741, 'Ezequiel', 'Rodriguez', 17, 61, '2023', 'Tecnica', 'guevara'),
(44991325, 'Agustin', 'Perez', 17, 62, '2023', 'Tecnica', 'guevara'),
(45012394, 'Sofia', 'Gomez', 18, 62, '2023', 'Tecnica', 'guevara');

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

INSERT INTO `curso` (`ID_Curso`, `Anio`, `Division`, `ID_Preceptor`, `Modalidad`, `Turno`, `Cantidad_Alumnos`) VALUES
(11, 1, 'primera', 1, 'tecnica', 'mañana', 20),
(12, 1, 'segunda', 1, 'tecnica', 'mañana', 21),
(13, 1, 'tercera', 1, 'tecnica', 'mañana', 22),
(14, 1, 'cuarta', 1, 'tecnica', 'mañana', 23),
(21, 2, 'primera', 2, 'tecnica', 'mañana', 20),
(22, 2, 'segunda', 2, 'tecnica', 'mañana', 21),
(23, 2, 'tercera', 2, 'tecnica', 'mañana', 22),
(24, 2, 'cuarta', 2, 'tecnica', 'mañana', 23),
(31, 3, 'primera', 3, 'tecnica', 'mañana', 20),
(32, 3, 'segunda', 3, 'tecnica', 'mañana', 21),
(33, 3, 'tercera', 3, 'tecnica', 'mañana', 22),
(34, 3, 'cuarta', 3, 'tecnica', 'mañana', 23),
(41, 4, 'primera', 4, 'tecnica', 'vespertino', 20),
(42, 4, 'segunda', 4, 'tecnica', 'vespertino', 21),
(43, 4, 'tercera', 4, 'tecnica', 'vespertino', 22),
(44, 4, 'cuarta', 4, 'tecnica', 'vespertino', 23),
(51, 5, 'primera', 5, 'tecnica', 'vespertino', 20),
(52, 5, 'segunda', 5, 'tecnica', 'vespertino', 21),
(53, 5, 'tercera', 5, 'tecnica', 'vespertino', 22),
(54, 5, 'cuarta', 5, 'tecnica', 'vespertino', 23),
(61, 6, 'primera', 6, 'tecnica', 'vespertino', 23),
(62, 6, 'segunda', 6, 'tecnica', 'vespertino', 22),
(63, 6, 'tercera', 6, 'tecnica', 'vespertino', 22),
(71, 7, 'primera', 7, 'tecnica', 'vespertino', 22),
(72, 7, 'segunda', 7, 'tecnica', 'vespertino', 22);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso_horario`
--

CREATE TABLE `curso_horario` (
  `id` int(10) NOT NULL,
  `curso_id` int(11) DEFAULT NULL,
  `horario_id` int(11) DEFAULT NULL,
  `dia` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `curso_horario`
--

INSERT INTO `curso_horario` (`id`, `curso_id`, `horario_id`, `dia`) VALUES
(1, 62, 2, 'Lunes'),
(2, 62, 3, 'Lunes'),
(3, 62, 4, 'Lunes'),
(4, 62, 5, 'Lunes'),
(5, 62, 6, 'Lunes'),
(6, 62, 7, 'Lunes'),
(7, 62, 8, 'Lunes'),
(8, 62, 9, 'Lunes'),
(9, 62, 10, 'Lunes'),
(10, 62, 3, 'martes'),
(11, 62, 4, 'martes'),
(12, 62, 5, 'martes'),
(13, 62, 6, 'martes'),
(14, 62, 7, 'martes'),
(15, 62, 8, 'martes'),
(16, 62, 9, 'martes'),
(17, 62, 1, 'miércoles'),
(18, 62, 2, 'miércoles'),
(19, 62, 3, 'miércoles'),
(20, 62, 4, 'miércoles'),
(21, 62, 5, 'miércoles'),
(22, 62, 6, 'miércoles'),
(23, 62, 7, 'miércoles'),
(24, 62, 8, 'miércoles'),
(25, 62, 9, 'miércoles'),
(26, 62, 10, 'miércoles'),
(27, 62, 2, 'jueves'),
(28, 62, 3, 'jueves'),
(29, 62, 4, 'jueves'),
(30, 62, 5, 'jueves'),
(31, 62, 6, 'jueves'),
(32, 62, 7, 'jueves'),
(33, 62, 8, 'jueves'),
(34, 62, 9, 'jueves'),
(35, 62, 10, 'jueves'),
(36, 62, 1, 'viernes'),
(37, 62, 2, 'viernes'),
(38, 62, 3, 'viernes'),
(39, 62, 4, 'viernes'),
(40, 62, 5, 'viernes'),
(41, 62, 6, 'viernes'),
(42, 62, 7, 'viernes'),
(43, 62, 8, 'viernes'),
(44, 62, 9, 'viernes'),
(45, 62, 10, 'viernes');

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
-- Estructura de tabla para la tabla `horarios`
--

CREATE TABLE `horarios` (
  `id` int(11) NOT NULL,
  `ID_Horario` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `horarios`
--

INSERT INTO `horarios` (`id`, `ID_Horario`) VALUES
(1, '14:30:00'),
(2, '15:10:00'),
(3, '16:00:00'),
(4, '16:40:00'),
(5, '17:20:00'),
(6, '18:00:00'),
(7, '18:40:00'),
(8, '19:30:00'),
(9, '20:10:00'),
(10, '21:00:00');

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
-- Estructura de tabla para la tabla `materia_horario`
--

CREATE TABLE `materia_horario` (
  `materia_id` int(11) DEFAULT NULL,
  `horario_id` int(11) DEFAULT NULL,
  `dia` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `materia_horario`
--

INSERT INTO `materia_horario` (`materia_id`, `horario_id`, `dia`) VALUES
(7, 2, 'Lunes'),
(7, 3, 'Lunes'),
(12, 4, 'Lunes'),
(12, 5, 'Lunes'),
(8, 6, 'Lunes'),
(8, 7, 'Lunes'),
(8, 8, 'Lunes'),
(4, 9, 'Lunes'),
(4, 10, 'Lunes'),
(6, 3, 'martes'),
(8, 4, 'martes'),
(8, 5, 'martes'),
(10, 6, 'martes'),
(10, 7, 'martes'),
(11, 8, 'martes'),
(11, 9, 'martes'),
(14, 1, 'miércoles'),
(14, 2, 'miércoles'),
(3, 3, 'miércoles'),
(3, 4, 'miércoles'),
(5, 5, 'miércoles'),
(7, 6, 'miércoles'),
(7, 7, 'miércoles'),
(7, 8, 'miércoles'),
(11, 9, 'miércoles'),
(11, 10, 'miércoles'),
(9, 2, 'jueves'),
(9, 3, 'jueves'),
(10, 4, 'jueves'),
(10, 5, 'jueves'),
(1, 6, 'jueves'),
(1, 7, 'jueves'),
(1, 8, 'jueves'),
(5, 9, 'jueves'),
(5, 10, 'jueves'),
(9, 1, 'viernes'),
(9, 2, 'viernes'),
(2, 3, 'viernes'),
(2, 4, 'viernes'),
(2, 5, 'viernes'),
(5, 6, 'viernes'),
(5, 7, 'viernes'),
(5, 8, 'viernes'),
(6, 9, 'viernes'),
(6, 10, 'viernes');

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
(1, 44526072, 1, '5.00'),
(2, 44526072, 2, '9.00'),
(3, 44526072, 3, '3.00'),
(4, 44526072, 4, '8.00'),
(5, 44526072, 5, '2.00'),
(6, 44526072, 6, '7.00'),
(7, 44526072, 7, '4.00'),
(8, 44526072, 8, '6.00'),
(9, 44526072, 9, '10.00'),
(10, 44526072, 10, '1.00'),
(11, 44526072, 11, '7.00'),
(12, 44526072, 12, '4.00'),
(13, 44526072, 13, '6.00'),
(14, 44526072, 14, '9.00'),
(15, 44960787, 1, '8.00'),
(16, 44960787, 2, '3.00'),
(17, 44960787, 3, '6.00'),
(18, 44960787, 4, '2.00'),
(19, 44960787, 5, '9.00'),
(20, 44960787, 6, '5.00'),
(21, 44960787, 7, '7.00'),
(22, 44960787, 8, '1.00'),
(23, 44960787, 9, '4.00'),
(24, 44960787, 10, '10.00'),
(25, 44960787, 11, '6.00'),
(26, 44960787, 12, '8.00'),
(27, 44960787, 13, '3.00'),
(28, 44960787, 14, '9.00');

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
(6, 'Ana Laura', 'Martinez'),
(7, 'Juan', 'nadie');

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recreos`
--

CREATE TABLE `recreos` (
  `id` int(11) NOT NULL,
  `horario_inicio` time DEFAULT NULL,
  `horario_fin` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `recreos`
--

INSERT INTO `recreos` (`id`, `horario_inicio`, `horario_fin`) VALUES
(1, '15:50:00', '16:00:00'),
(2, '19:20:00', '19:30:00'),
(3, '20:50:00', '21:00:00');

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
-- Indices de la tabla `curso_horario`
--
ALTER TABLE `curso_horario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `curso_id` (`curso_id`),
  ADD KEY `horario_id` (`horario_id`);

--
-- Indices de la tabla `curso_materias`
--
ALTER TABLE `curso_materias`
  ADD KEY `ID_Curso` (`ID_Curso`),
  ADD KEY `ID_Materia` (`ID_Materia`);

--
-- Indices de la tabla `horarios`
--
ALTER TABLE `horarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`ID_Materia`),
  ADD KEY `id_profesor` (`id_profesor`);

--
-- Indices de la tabla `materia_horario`
--
ALTER TABLE `materia_horario`
  ADD KEY `horario_id` (`horario_id`),
  ADD KEY `materia_id` (`materia_id`);

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
  MODIFY `ID_Alumno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45012395;

--
-- AUTO_INCREMENT de la tabla `notas`
--
ALTER TABLE `notas`
  MODIFY `ID_Nota` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `preceptor`
--
ALTER TABLE `preceptor`
  MODIFY `ID_Preceptor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

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
  ADD CONSTRAINT `alumno_ibfk_1` FOREIGN KEY (`ID_Curso`) REFERENCES `curso` (`ID_Curso`);

--
-- Filtros para la tabla `curso`
--
ALTER TABLE `curso`
  ADD CONSTRAINT `curso_ibfk_1` FOREIGN KEY (`ID_Preceptor`) REFERENCES `preceptor` (`ID_Preceptor`);

--
-- Filtros para la tabla `curso_horario`
--
ALTER TABLE `curso_horario`
  ADD CONSTRAINT `curso_horario_ibfk_1` FOREIGN KEY (`curso_id`) REFERENCES `curso` (`ID_Curso`),
  ADD CONSTRAINT `curso_horario_ibfk_2` FOREIGN KEY (`horario_id`) REFERENCES `horarios` (`id`);

--
-- Filtros para la tabla `curso_materias`
--
ALTER TABLE `curso_materias`
  ADD CONSTRAINT `curso_materias_ibfk_1` FOREIGN KEY (`ID_Curso`) REFERENCES `curso` (`ID_Curso`),
  ADD CONSTRAINT `curso_materias_ibfk_2` FOREIGN KEY (`ID_Materia`) REFERENCES `materias` (`ID_Materia`);

--
-- Filtros para la tabla `materias`
--
ALTER TABLE `materias`
  ADD CONSTRAINT `materias_ibfk_1` FOREIGN KEY (`id_profesor`) REFERENCES `profesor` (`ID_Profesor`),
  ADD CONSTRAINT `materias_ibfk_2` FOREIGN KEY (`id_profesor`) REFERENCES `profesor` (`ID_Profesor`);

--
-- Filtros para la tabla `materia_horario`
--
ALTER TABLE `materia_horario`
  ADD CONSTRAINT `materia_horario_ibfk_1` FOREIGN KEY (`horario_id`) REFERENCES `horarios` (`id`),
  ADD CONSTRAINT `materia_horario_ibfk_2` FOREIGN KEY (`materia_id`) REFERENCES `materias` (`ID_Materia`);

--
-- Filtros para la tabla `notas`
--
ALTER TABLE `notas`
  ADD CONSTRAINT `notas_ibfk_1` FOREIGN KEY (`ID_Alumno`) REFERENCES `alumno` (`ID_Alumno`),
  ADD CONSTRAINT `notas_ibfk_2` FOREIGN KEY (`ID_Materia`) REFERENCES `materias` (`ID_Materia`),
  ADD CONSTRAINT `notas_ibfk_3` FOREIGN KEY (`ID_Alumno`) REFERENCES `alumno` (`ID_Alumno`),
  ADD CONSTRAINT `notas_ibfk_4` FOREIGN KEY (`ID_Materia`) REFERENCES `materias` (`ID_Materia`);

--
-- Filtros para la tabla `preceptor`
--
ALTER TABLE `preceptor`
  ADD CONSTRAINT `preceptor_ibfk_1` FOREIGN KEY (`ID_Preceptor`) REFERENCES `curso` (`ID_Preceptor`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-09-2025 a las 00:00:01
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cordoba-basquet`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `nombre`, `descripcion`) VALUES
(1, 'ACBB', 'Asociación Cordobesa de Básquet'),
(2, 'FBPC', 'Federación de Básquet de la Provincia de Córdoba'),
(3, 'CABB', 'Confederación Argentina de Básquet');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE `noticias` (
  `id_noticia` int(11) NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `subtitulo` varchar(800) NOT NULL,
  `contenido` text NOT NULL,
  `fecha_publicacion` timestamp NULL DEFAULT current_timestamp(),
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`id_noticia`, `titulo`, `subtitulo`, `contenido`, `fecha_publicacion`, `id_categoria`) VALUES
(1, 'Gabriel Acosta es el nuevo presidente de la ACBB', 'La Asamblea General Ordinaria definió el cambio de autoridades en la Asociación Cordobesa de Básquetbol. Acosta conducirá la entidad hasta 2027 junto a una renovada comisión directiva.', 'El lunes por la noche se desarrolló la Asamblea General Ordinaria de la Asociación Cordobesa de Básquetbol, en la que se aprobaron distintos temas, incluyendo el recambio de autoridades.\r\n\r\nGabriel Acosta fue elegido como nuevo presidente y estará al frente de la institución hasta 2027, sucediendo a Rubén Whelan. La votación no presentó objeciones por parte de los dirigentes de los clubes presentes.\r\n\r\nEl nuevo Consejo Directivo quedó conformado de la siguiente manera:\r\n\r\nPresidente: Gabriel Oscar Acosta\r\n\r\nVicepresidente: Guillermo Cragnolini\r\n\r\nSecretario General: Juan Carlos Quevedo\r\n\r\nProsecretaria: Verónica Alejandra Zenarola\r\n\r\nTesorero: Ricardo Enrique Rullo\r\n\r\nProtesorero: Gabriel Fernando Brocanelli\r\n\r\nVocal Titular A: Eder German Baralle\r\n\r\nVocal Titular B: Rinaldo Ranwel Pilatti\r\n\r\nVocal Titular Básquet Adaptado: Lucas Ángel Whelan\r\n\r\nVocal Titular Básquet Femenino: Hernán Carlos Ponce\r\n\r\nVocal Suplente A: Luciano Ariel Gómez\r\n\r\nVocal Suplente B: Mario Fabián Pérez\r\n\r\nVocal Suplente Básquet Adaptado: Pablo Carreño\r\n\r\nVocal Suplente Básquet Femenino: Agustín Ludovico Castelli\r\n\r\nAdemás, se confirmaron los integrantes de los Tribunales de Penas y de Honor, junto con la Comisión Revisora de Cuentas, que acompañarán la gestión en el período 2025-2027.', '2025-08-27 22:22:15', 1),
(2, 'La Liga 3x3 llega a Córdoba', 'Este domingo se disputará la quinta parada en Hindú Club, con competencia masculina y femenina, y transmisión en vivo por Básquet Pass.', 'La Liga 3x3 desembarca este domingo 31 de agosto en Córdoba, con sede en el Hindú Club (calle Sarmiento 1250, barrio General Paz). Desde las 10 horas se jugará la quinta parada del torneo, con partidos en las ramas masculina y femenina.\r\n\r\nEl evento, que se podrá seguir en vivo a través de Básquet Pass, promete ritmo, competencia y show, consolidándose como una marca registrada del básquet 3x3 en Argentina.\r\n\r\nLa inscripción es gratuita y debe realizarse exclusivamente a través del sitio oficial de FIBA, en el siguiente enlace:\r\n? Registro oficial en FIBA', '2025-08-27 22:25:14', 2),
(3, 'Ameghino campeón de la Liga del Centenario U13 Femenina', 'El equipo de Villa María se consagró invicto en el Súper Cuatro Final disputado en Río Cuarto. Sofía Carranza fue elegida como la MVP del torneo.', 'El equipo femenino U13 de Ameghino (Villa María) se coronó campeón de la Liga del Centenario tras imponerse en el Súper Cuatro Final disputado en Río Cuarto los días sábado 23 y domingo 24 de agosto.\r\n\r\nEn el cuadrangular definitorio participaron los clubes Centro Social (Brinkmann), Newell’s (Laguna Larga), Banda Norte (Río Cuarto) y Ameghino, quienes se enfrentaron bajo el formato “todas contra todas”.\r\n\r\nAmeghino venció a sus tres rivales y se consagró de manera invicta, cerrando el certamen con 9 triunfos en igual cantidad de presentaciones. El equipo dirigido por Matías Batista promedió 59.6 puntos a favor y 36.2 en contra.\r\n\r\nLa jugadora Sofía Carranza fue distinguida como la MVP de la definición.\r\n\r\nPlantel campeón:\r\nAgustina María Lingua, Sofía Carranza Arcas, Alina Almendra Alaniz, Guillermina Crosetto Cornaglia, Isabella Fátima Piraino, Valentina Rosetto, Lucía Fornero, Lourdes Fornero, Anna Fuente Moresco, Valentina Medina, Valentina Ponce y Emma Guzmán Díaz.\r\nEntrenador: Matías Batista.', '2025-08-29 00:17:19', 2),
(7, 'Noticia Para editar ', 'Soy una noticia editable para verificar el funcionamiento ', 'Cuando se termine de editarme, debo ser eliminada ', '2025-08-30 23:52:13', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Joaquin', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'Martina', 'd93591bdf7860e1e4ee2fca799911215'),
(3, 'Flavia', '81dc9bdb52d04dc20036dbd8313ed055');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id_noticia`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id_noticia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD CONSTRAINT `noticias_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

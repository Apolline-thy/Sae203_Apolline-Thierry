-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 18 avr. 2025 à 20:41
-- Version du serveur : 10.11.11-MariaDB-0+deb12u1
-- Version de PHP : 8.3.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `thierry18`
--

-- --------------------------------------------------------

--
-- Structure de la table `Category`
--

CREATE TABLE `Category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `Category`
--

INSERT INTO `Category` (`id`, `name`) VALUES
(1, 'Action'),
(2, 'Comédie'),
(3, 'Drame'),
(4, 'Science-fiction'),
(5, 'Animation'),
(6, 'Thriller'),
(7, 'Horreur'),
(8, 'Aventure'),
(9, 'Fantaisie'),
(10, 'Documentaire');

-- --------------------------------------------------------

--
-- Structure de la table `Favoris`
--

CREATE TABLE `Favoris` (
  `id` int(11) NOT NULL,
  `Profile_id` int(11) NOT NULL,
  `Movie_id` int(11) NOT NULL,
  `date_ajout` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Favoris`
--

INSERT INTO `Favoris` (`id`, `Profile_id`, `Movie_id`, `date_ajout`) VALUES
(11, 4, 45, '2025-04-11 12:00:13'),
(12, 6, 49, '2025-04-11 12:25:02'),
(13, 4, 51, '2025-04-11 12:25:42'),
(15, 10, 54, '2025-04-11 14:12:10'),
(21, 10, 12, '2025-04-12 13:37:09'),
(24, 10, 52, '2025-04-13 12:18:02'),
(40, 10, 17, '2025-04-14 19:41:28'),
(41, 10, 60, '2025-04-18 13:16:35'),
(42, 9, 53, '2025-04-18 13:39:08'),
(43, 10, 45, '2025-04-18 18:56:08');

-- --------------------------------------------------------

--
-- Structure de la table `Movie`
--

CREATE TABLE `Movie` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `year` int(11) DEFAULT NULL,
  `length` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `director` varchar(255) DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `trailer` varchar(255) DEFAULT NULL,
  `min_age` varchar(10) DEFAULT NULL,
  `featured` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `Movie`
--

INSERT INTO `Movie` (`id`, `name`, `year`, `length`, `description`, `director`, `id_category`, `image`, `trailer`, `min_age`, `featured`) VALUES
(7, 'Interstellar', 2014, 169, 'Un groupe d\'explorateurs voyage à travers un trou de ver pour sauver l\'humanité.', 'Christopher Nolan', 4, 'interstellar.jpg', 'https://www.youtube.com/embed/VaOijhK3CRU?si=76Ke4uw4LYjuLuQ6', '12+', 0),
(12, 'La Liste de Schindler', 1993, 195, 'Un industriel allemand sauve des milliers de Juifs pendant l\'Holocauste.', 'Steven Spielberg', 3, 'schindler.webp', 'https://www.youtube.com/embed/ONWtyxzl-GE?si=xC3ASGGPy5Ib-aPn', '16+', 0),
(17, 'Your Name', 2016, 107, 'Deux adolescents échangent leurs corps de manière mystérieuse.', 'Makoto Shinkai', 5, 'your_name.jpg', 'https://www.youtube.com/embed/AROOK45LXXg?si=aUQyGk2VMCb_ToUL', '10+', 0),
(27, 'Le Bon, la Brute et le Truand', 1966, 161, 'Trois hommes se lancent à la recherche d\'un trésor caché.', 'Sergio Leone', 8, 'bon_brute_truand.jpg', 'https://www.youtube.com/embed/WA1hCZFOPqs?si=TwNZAoM4oj4KpGja', '12+', 0),
(40, 'Le Vent se lève', 2014, 127, 'Inspiré par le fameux concepteur d’avions Giovanni Caproni, Jiro rêve de voler et de dessiner de magnifiques avions. Mais sa mauvaise vue l’empêche de devenir pilote, et il se fait engager dans le département aéronautique d’une importante entreprise d’ingénierie en 1927. Son génie l’impose rapidement comme l’un des plus grands ingénieurs du monde.', 'Hayao Miyazaki', 8, 'vent.jpg', 'https://www.youtube.com/embed/Rr42rA8t9s8?si=RCiXdod4jn7cenQ2', '10+', 0),
(43, 'Ça', 2017, 132, '\r\n\r\nÀ Derry, dans le Maine, sept gamins ayant du mal à s\'intégrer se sont regroupés au sein du \"Club des Ratés\". Rejetés par leurs camarades, ils sont les cibles favorites des gros durs de l\'école. Ils ont aussi en commun d\'avoir éprouvé leur plus grande terreur face à un terrible prédateur métamorphe qu\'ils appellent \"Ça\"…\r\n\r\nCar depuis toujours, Derry est en proie à une créature qui émerge des égouts tous les 27 ans pour se nourrir des terreurs de ses victimes de choix : les enfants. Bien décidés à rester soudés, les Ratés tentent de surmonter leurs peurs pour enrayer un nouveau cycle meurtrier. Un cycle qui a commencé un jour de pluie lorsqu\'un petit garçon poursuivant son bateau en papier s\'est retrouvé face-à-face avec le Clown Grippe-Sou …\r\n', ' Andy Muschietti', 7, 'ca.webp', 'https://www.youtube.com/embed/0zkm6IPr3Jw?si=zAJu4-_3x0owL8zk', '18+', 0),
(45, 'Spider-Man: Into the Spider-Verse', 2018, 117, 'Spider-Man traverse des dimensions parallèles et fait équipe avec les Spider-Man de ces dimensions pour mettre fin à une menace pour toute l\'humanité.', 'Bob Persichetti Peter Ramsey Rodney Rothman', 5, 'spider.webp', 'https://www.youtube.com/embed/eGDqpAM6Gyk?si=r1gC7F3DpUq62Xef', '5+', 0),
(47, 'The Conjuring', 2013, 112, 'Avant Amityville, il y avait Harrisville… Conjuring : Les dossiers Warren, raconte l\'histoire horrible, mais vraie, d\'Ed et Lorraine Warren, enquêteurs paranormaux réputés dans le monde entier, venus en aide à une famille terrorisée par une présence inquiétante dans leur ferme isolée… Contraints d\'affronter une créature démoniaque d\'une force redoutable, les Warren se retrouvent face à l\'affaire la plus terrifiante de leur carrière…', 'James Wan', 7, 'conjuring.jpg', 'https://www.youtube.com/embed/McOmzgX09wo?si=Z43D3HgVa2lcI-2f', '18+', 0),
(48, 'Wakfu : Ogrest, la Légende', 2011, 22, 'Alors que Yugo est tombé malade avec l\'arrivé de l\'hiver, Alibert décide de lui conter la légende d\'Ogrest, le monstre déclencheur de catastrophes qui entama un voyage contre vents et marées pour réveiller une princesse endormie. ', 'Olivier Vannelle', 5, 'wakfu.jpg', 'https://www.youtube.com/embed/16C_dQoR05g?si=cnUTl4YzVPS_RhIv', '5+', 0),
(49, 'Dune', 2021, 155, 'L\'histoire de Paul Atreides, jeune homme aussi doué que brillant, voué à connaître un destin hors du commun qui le dépasse totalement. ', 'Eric Roth Jon Spaihts Denis Villeneuve', 4, 'dune.jpg', 'https://www.youtube.com/embed/gHt8tCHbB2M?si=TccZnnUCpTzhINNI', '12+', 1),
(51, 'J\'ai perdu mon corps', 2019, 81, 'A Paris, Naoufel tombe amoureux de Gabrielle. Un peu plus loin dans la ville, une main coupée s’échappe d’un labo, bien décidée à retrouver son corps. S’engage alors une cavale vertigineuse à travers la ville, semée d’embûches et des souvenirs de sa vie jusqu’au terrible accident. Naoufel, la main, Gabrielle, tous trois retrouveront, d’une façon poétique et inattendue, le fil de leur histoire...', ' Jérémy Clapin Guillaume Laurant', 5, 'corps.webp', 'https://www.youtube.com/embed/PEmvj6lduE8?si=vKfr-1UB0nh2spKb', '5+', 0),
(52, 'Le Cercle des neiges', 2023, 144, 'En 1972, un avion uruguayen s\'écrase en plein cœur des Andes. Les survivants ne peuvent compter que les uns sur les autres pour réchapper au crash.', 'Juan Antonio Bayona', 3, 'cercle_neige.jpg', 'https://www.youtube.com/embed/24gdHaK6qTg?si=0eErGA6uR3Jy9ZFb', '16+', 0),
(53, 'Quoi qu\'il arrive, je vous aime', 2020, 12, 'Des parents en deuil se retrouvent aspirés dans le vide immense créé par la perte de leur enfant survenue lors d\'une tragique fusillade dans une école.', ' Michael Govier Will McCormack', 3, 'arrive.jpg', 'https://www.youtube.com/embed/3kH75xhTpaM?si=uTJtt8WMp-0WDxII', '13+', 0),
(54, 'Prometheus ', 2012, 124, 'Une équipe d’explorateurs découvre un indice sur l’origine de l’humanité sur Terre. Cette découverte les entraîne dans un voyage fascinant jusqu’aux recoins les plus sombres de l’univers. Là-bas, un affrontement terrifiant qui décidera de l’avenir de l’humanité les attend.', ' Ridley Scott', 4, 'alien.jpg', 'https://www.youtube.com/embed/5yJ-gkTuao4?si=b8MRbuvEiiTUZmOf', '15+', 0),
(55, 'Tokyo Godfathers', 2003, 88, 'A Tokyo, pendant les fêtes de Noël, trois amis sans abri trouvent un bébé abandonné et une mystérieuse clé annonciatrice de folles aventures.', ' Satoshi Kon, Shôgo Furuya', 2, 'tokyo.webp', 'https://www.youtube.com/embed/5yJ-gkTuao4?si=b8MRbuvEiiTUZmOf', '13+', 1),
(56, 'Arrête-moi si tu peux', 2002, 141, 'Dans les années soixante, le jeune Frank Abagnale Jr. est passé maître dans l\'art de l\'escroquerie, allant jusqu\'à détourner 2,5 millions de dollars et à figurer sur les listes du FBI comme l\'un des dix individus les plus recherchés des Etats-Unis. Véritable caméléon, Frank revêt des identités aussi diverses que celles de pilote de ligne, de médecin, de professeur d\'université ou encore d\'assistant du procureur. Carl Hanratty, agent du FBI à l\'apparence stricte, fait de la traque de Frank Abagnale Jr. sa mission prioritaire, mais ce dernier reste pendant longtemps insaisissable...', 'Steven Spielberg', 2, 'arrete.webp', 'https://www.youtube.com/embed/rPKoc0sU_DA?si=ISANjeXJZeaV-pVP\" title=', '5+', 0),
(57, 'Au revoir là-haut ', 2017, 141, 'Novembre 1919. Deux rescapés des tranchées, l\'un dessinateur de génie, l\'autre modeste comptable, décident de monter une arnaque aux monuments aux morts. ', 'Albert Dupontel', 3, 'au_revoir.jpg', 'https://www.youtube.com/embed/YbN5oj8I24Y?si=_LCaCI-0Pfs79g6f\" title=', '13+', 0),
(58, 'Kung Fu Panda 3', 2016, 95, 'Po avait toujours cru son père panda disparu, mais le voilà qui réapparaît ! Enfin réunis, père et fils vont voyager jusqu’au village secret des pandas.', 'Jennifer Yuh Nelson\r\nAlessandro Carloni', 2, 'kung_fu.jpg', 'https://www.youtube.com/embed/DotVyXe-xrA?si=wE1a6Wo6dWcUde1y\" title=\"YouTube video player\" frameborder=\"0\" allow=', '7+', 1),
(59, 'Klaus', 2019, 96, 'Jesper, qui s\'est distingué comme le pire élève de son école de facteurs, écope d\'une mission sur une île enneigée, au nord du Cercle arctique. Là-bas, les habitants ne s\'entendent pas et ne se parlent presque jamais. Autant dire qu\'ils n\'entretiennent pas non plus de correspondance ! Alors que Jesper est sur le point d\'abandonner, il trouve une alliée en la personne d\'Alva, l\'institutrice de l\'île, et fait la connaissance de Klaus, mystérieux menuisier qui vit seul dans son chalet regorgeant de jouets artisanaux. Grâce à ces relations amicales inattendues, la petite ville de Smeerensburg retrouve la joie de vivre. C\'est ainsi que ses habitants découvrent la générosité entre voisins, les contes de fée et la tradition des chaussettes soigneusement accrochées à la cheminée pour Noël !', 'Sergio Pablos', 5, 'klaus.jpg', 'https://www.youtube.com/embed/h5gR4vUb2rA?si=JFrPvqcJPdxKXI85\" title=', '7+', 0),
(60, 'Porco Rosso', 1992, 93, 'Dans l’entre-deux-guerres, en pleine montée du fascisme, quelque part en Italie, Marco Pagot, pilote hors-pair épris de liberté, est victime d’un sortilège. Il devient chasseur de prime, et établit son repaire sur une île déserte de l’Adriatique. Surnommé Porco Rosso par ses ennemis, les pirates de l’air et brigands de tout poil, il affronte les meilleurs aviateurs en duel aérien à bord de son splendide hydravion rouge.', 'Hayao Miyazaki', 5, 'porco.webp', 'https://www.youtube.com/embed/lnkBfGBOG2Q?si=9I7AnxSLdAv4Fxi1\" title=', '13+', 0);

-- --------------------------------------------------------

--
-- Structure de la table `Profile`
--

CREATE TABLE `Profile` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `date_naissance` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Profile`
--

INSERT INTO `Profile` (`id`, `name`, `avatar`, `date_naissance`) VALUES
(9, 'Apolline', 'apolline.jpg', '2006-03-29'),
(10, 'Alina', 'alina.jpg', '2002-06-17'),
(11, 'Bastien', 'bastien.jpg', '2020-02-11');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Favoris`
--
ALTER TABLE `Favoris`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Profile_id` (`Profile_id`,`Movie_id`),
  ADD KEY `Movie_id` (`Movie_id`);

--
-- Index pour la table `Movie`
--
ALTER TABLE `Movie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_category` (`id_category`);

--
-- Index pour la table `Profile`
--
ALTER TABLE `Profile`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Category`
--
ALTER TABLE `Category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `Favoris`
--
ALTER TABLE `Favoris`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT pour la table `Movie`
--
ALTER TABLE `Movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT pour la table `Profile`
--
ALTER TABLE `Profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Favoris`
--
ALTER TABLE `Favoris`
  ADD CONSTRAINT `Favoris_ibfk_1` FOREIGN KEY (`Profile_id`) REFERENCES `Profile` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `Favoris_ibfk_2` FOREIGN KEY (`Movie_id`) REFERENCES `Movie` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `Movie`
--
ALTER TABLE `Movie`
  ADD CONSTRAINT `movie_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `Category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

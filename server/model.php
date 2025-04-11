<?php
/**
 * Ce fichier contient toutes les fonctions qui réalisent des opérations
 * sur la base de données, telles que les requêtes SQL pour insérer, 
 * mettre à jour, supprimer ou récupérer des données.
 */

/**
 * Définition des constantes de connexion à la base de données.
 *
 * HOST : Nom d'hôte du serveur de base de données, ici "localhost".
 * DBNAME : Nom de la base de données
 * DBLOGIN : Nom d'utilisateur pour se connecter à la base de données.
 * DBPWD : Mot de passe pour se connecter à la base de données.
 */
define("HOST", "localhost");
define("DBNAME", "thierry18");
define("DBLOGIN", "thierry18");
define("DBPWD", "thierry18");

function getAllMovies(){
     // Connexion à la base de données
     $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
     // Requête SQL pour récupérer le menu avec des paramètres
     $sql = "select id, name, image from Movie";
     // Prépare la requête SQL
     $stmt = $cnx->prepare($sql);
     $stmt->execute();
     // Récupère les résultats de la requête sous forme d'objets
     $res = $stmt->fetchAll(PDO::FETCH_OBJ);
     return $res; // Retourne les résultats
}



/**
 * Ajoute un film à la base de données.
 *
 * @param string $n Le titre du film.
 * @param string $d Le nom du réalisateur du film.
 * @param string $i Le nom du réalisateur du film.
 * @param int $y L'année de sortie du film.
 * @param int $l La durée du film en minutes.
 * @param string $s La description ou synopsis du film.
 * @param string $c La catégorie du film (par exemple, Drame, Aventure, etc.).
 * @param string $t L'URL du trailer du film.
 * @param int $a Les restrictions d'âge du film.
 * @return int Le nombre de lignes affectées par la requête d'insertion.
 * 
 * A SAVOIR: une requête SQL de type insert retourne le nombre de lignes affectées par la requête.
 * Si l'insertion a réussi, le nombre de lignes affectées sera 1.
 * Si l'insertion a échoué, le nombre de lignes affectées sera 0.
 */
function addMovie($n, $d, $i, $y, $l, $s, $c, $t, $a){
    // Connexion à la base de données
 
        $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
        // $cnx->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // Requête SQL pour ajouter un film à la base de données
        $sql = "INSERT INTO Movie (name, director, image, year, length, description, id_category, trailer, min_age) 
                VALUES (:name, :director, :image, :year, :length, :description, :id_category, :trailer, :min_age)";
        
        // Prépare la requête SQL
        $stmt = $cnx->prepare($sql);
        
        // Lie les paramètres aux valeurs
        $stmt->bindParam(':name', $n);
        $stmt->bindParam(':director', $d);
        $stmt->bindParam(':image', $i);
        $stmt->bindParam(':year', $y);
        $stmt->bindParam(':length', $l);
        $stmt->bindParam(':description', $s);
        $stmt->bindParam(':id_category', $c);
        $stmt->bindParam(':trailer', $t);
        $stmt->bindParam(':min_age', $a);
        
        // Exécute la requête SQL
        $stmt->execute();
        
        // Récupère le nombre de lignes affectées par la requête
        $res = $stmt->rowCount(); 
        return $res; // Retourne le nombre de lignes affectées
    // } catch (PDOException $e) {
    //     // En cas d'erreur, retourne 0 et log l'erreur
    //     error_log($e->getMessage());
    //     return 0;
    // }
}


function readMovieDetail($id) {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);

    // Requête SQL corrigée
    $sql = "SELECT 
                Movie.id, 
                Movie.name, 
                Movie.image, 
                Movie.director, 
                Movie.year, 
                Movie.description, 
                Movie.trailer, 
                Movie.min_age, 
                Category.name AS category
            FROM Movie 
            LEFT JOIN Category ON Movie.id_category = Category.id
            WHERE Movie.id = :id";

    // Préparation et exécution de la requête
    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();

    // Récupération des résultats
    $movies = $stmt->fetch(PDO::FETCH_ASSOC);
    return $movies;
}

function getMoviesByCategory() {
    try {
        $cnx = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, DBLOGIN, DBPWD, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ]);

        // Requête SQL pour récupérer les films groupés par catégorie
        $sql = "SELECT 
                    Category.id AS category_id, 
                    Category.name AS category_name, 
                    Movie.id AS movie_id, 
                    Movie.name AS movie_name, 
                    Movie.image AS movie_image
                FROM Movie
                JOIN Category ON Movie.id_category = Category.id
                ORDER BY Category.name, Movie.name";

        $stmt = $cnx->query($sql);
        $rows = $stmt->fetchAll(PDO::FETCH_OBJ);

        // Regrouper les films par catégorie
        $categories = [];
        foreach ($rows as $row) {
            if (!isset($categories[$row->category_id])) {
                $categories[$row->category_id] = [
                    "name" => $row->category_name,
                    "movies" => []
                ];
            }
            $categories[$row->category_id]["movies"][] = [
                "id" => $row->movie_id,
                "name" => $row->movie_name,
                "image" => $row->movie_image
            ];
        }

        return array_values($categories); // Retourne un tableau indexé
    } catch (Exception $e) {
        error_log("Erreur SQL : " . $e->getMessage());
        return false;
    }
}


/**
 * Ajoute un film à la base de données.
 *
 * @param string $n Le titre du film.
 * @param string $c La catégorie du film (par exemple, Drame, Aventure, etc.).
 * @param string $t L'URL du trailer du film.
 * 
 * A SAVOIR: une requête SQL de type insert retourne le nombre de lignes affectées par la requête.
 * Si l'insertion a réussi, le nombre de lignes affectées sera 1.
 * Si l'insertion a échoué, le nombre de lignes affectées sera 0.
 */
function addProfile($n, $a,$d){
    // Connexion à la base de données
 
        $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
        // $cnx->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // Requête SQL pour ajouter un film à la base de données
        $sql = "INSERT INTO Profile (name, avatar, date_naissance) 
                VALUES (:name, :avatar, :date_naissance)";
        
        // Prépare la requête SQL
        $stmt = $cnx->prepare($sql);
        
        // Lie les paramètres aux valeurs
        $stmt->bindParam(':name', $n);
        $stmt->bindParam(':avatar', $a);
        $stmt->bindParam(':date_naissance', $d);
        
        // Exécute la requête SQL
        $stmt->execute();
        
        // Récupère le nombre de lignes affectées par la requête
        $res = $stmt->rowCount(); 
        return $res; // Retourne le nombre de lignes affectées
}


function readProfiles() {
    $cnx = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT id, name, avatar, TIMESTAMPDIFF(YEAR, date_naissance, CURDATE()) AS age FROM Profile";
    $stmt = $cnx->query($sql);
    return $stmt->fetchAll(PDO::FETCH_OBJ); 
}




function readMoviesByAge($age) {
  
        $cnx = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, DBLOGIN, DBPWD, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ]);

        $sql = "SELECT 
                    Movie.id, 
                    Movie.name, 
                    Movie.image, 
                    Movie.director, 
                    Movie.year, 
                    Movie.description, 
                    Movie.trailer, 
                    Movie.min_age, 
                    Category.name AS category
                FROM Movie
                LEFT JOIN Category ON Movie.id_category = Category.id
                WHERE Movie.min_age <= :age";

        $stmt = $cnx->prepare($sql);
        $stmt->bindParam(':age', $age, PDO::PARAM_INT);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_OBJ);
    };




function modifyProfile($id, $name, $avatar, $date_naissance) {

        $cnx = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, DBLOGIN, DBPWD, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ]);

        $sql = "UPDATE Profile 
                SET name = :name, avatar = :avatar, date_naissance = :date_naissance 
                WHERE id = :id";

        $stmt = $cnx->prepare($sql);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->bindParam(':name', $name, PDO::PARAM_STR);
        $stmt->bindParam(':avatar', $avatar, PDO::PARAM_STR);
        $stmt->bindParam(':date_naissance', $date_naissance, PDO::PARAM_STR);

        return $stmt->execute();
    }

/**
 * Ajoute un film à la base de données.
 *
 * @param int $n Le titre du film.
 * @param int $c La catégorie du film (par exemple, Drame, Aventure, etc.).
 * @param bool $t L'URL du trailer du film.
 * 
 * A SAVOIR: une requête SQL de type insert retourne le nombre de lignes affectées par la requête.
 * Si l'insertion a réussi, le nombre de lignes affectées sera 1.
 * Si l'insertion a échoué, le nombre de lignes affectées sera 0.
 */
   


function addFavoris($movieId, $profileId) {
      $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
        // $cnx->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // Requête SQL pour ajouter un film à la base de données
        $sql = "INSERT INTO Favoris (movie_id, profile_id) 
                VALUES (:movie_id, :profile_id)";
        
        // Prépare la requête SQL
        $stmt = $cnx->prepare($sql);
        
        // Lie les paramètres aux valeurs
        $stmt->bindParam(':movie_id', $movieId);
        $stmt->bindParam(':profile_id', $profileId);
        // Exécute la requête SQL
        $stmt->execute();
        
        // Récupère le nombre de lignes affectées par la requête
        $res = $stmt->rowCount(); 
        return $res; // Retourne le nombre 
}


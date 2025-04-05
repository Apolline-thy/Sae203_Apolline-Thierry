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

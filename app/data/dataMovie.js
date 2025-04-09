// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~thierry18/SAE2.03/"; //"http://mmi.unilim.fr/~????"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataMovie = {};

/**
 * Fetches data from the server based on the specified day.
 *
 * @param {number} age - The week parameter to be sent to the server.
 * @returns {Promise<Array>} The response from the server.
 *
 * DataMovie.request permet de récupérer des données depuis le serveur.
 * Elle prend en paramètre une semaine (1, 2, ..., 52) et un jour (lundi mardi...)
 * renvoie les données contenues dans la réponse du serveur (data).
 */
DataMovie.request = async function (age) {
  console.log(
    `Requête envoyée : ${HOST_URL}/server/script.php?todo=readMoviesByAge&age=${age}`
  );
  let answer = await fetch(
    `${HOST_URL}/server/script.php?todo=readMoviesByAge&age=${age}`
  );
  let data = await answer.json();
  console.log("Réponse reçue dans DataMovie.request :", data); // Vérifiez ici
  return data;
};

/**
 * Récupère les films regroupés par catégorie.
 * @returns {Promise<Array>} Liste des catégories avec leurs films.
 */
DataMovie.requestMovieCategory = async function () {
  let response = await fetch(`${HOST_URL}/server/script.php?todo=readMovies`);
  let category = await response.json();
  return category;
};

export { DataMovie };

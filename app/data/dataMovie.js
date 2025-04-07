// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~thierry18/SAE2.03/"; //"http://mmi.unilim.fr/~????"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataMovie = {};

/**
 * Fetches data from the server based on the specified day.
 *
 * @param {string} week - The week parameter to be sent to the server.
 * @param {string} day - The day parameter to be sent to the server.
 * @returns The response from the server.
 *
 * DataMovie.request permet de récupérer des données depuis le serveur.
 * Elle prend en paramètre une semaine (1, 2, ..., 52) et un jour (lundi mardi...)
 * renvoie les données contenues dans la réponse du serveur (data).
 */
DataMovie.request = async function () {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=readmovies");
  let data = await answer.json();
  return data;
};

DataMovie.requestMovieDetail = async function (id) {
  let response = await fetch(
    `${HOST_URL}/server/script.php?todo=readMovieDetail&id=${id}`
  );
  let data = await response.json();
  console.log(data); // Ajoute un log pour voir ce que retourne l'API
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

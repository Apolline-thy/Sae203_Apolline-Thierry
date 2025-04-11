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

DataMovie.requestMovieDetail = async function (id) {
  console.log(`Requête envoyée pour le détail du film : ${id}`);

  let answer = await fetch(
    `${HOST_URL}/server/script.php?todo=readMovieDetail&id=${id}`
  );
  if (!answer.ok) {
    throw new Error(`Erreur HTTP : ${answer.status}`);
  }
  let data = await answer.json();
  return data;
};

DataMovie.addFavoris = async function (id, profileId) {
  console.log(`Requête envoyée : movieId=${id}, profileId=${profileId}`);
  let response = await fetch(
    `${HOST_URL}/server/script.php?todo=addFavoris&movieId=${id}&profileId=${profileId}`
  );
  let data = await response.json();
  console.log("Réponse du serveur :", data);
  return data;
};

DataMovie.getFavoris = async function (profileId) {
  let response = await fetch(
    `${HOST_URL}/server/script.php?todo=getFavoris&profileId=${profileId}`
  );
  let data = await response.json();
  return data;
};

export { DataMovie };

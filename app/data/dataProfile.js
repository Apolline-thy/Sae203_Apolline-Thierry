// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~thierry18/SAE2.03/"; //"http://mmi.unilim.fr/~????"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataProfile = {};

/**
 * Fetches data from the server based on the specified day.
 *
 * @param {string} week - The week parameter to be sent to the server.
 * @param {string} day - The day parameter to be sent to the server.
 * @returns The response from the server.
 *
 * DataProfile.request permet de récupérer des données depuis le serveur.
 * Elle prend en paramètre une semaine (1, 2, ..., 52) et un jour (lundi mardi...)
 * renvoie les données contenues dans la réponse du serveur (data).
 */
DataProfile.read = async function () {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=readProfiles");
  let data = await answer.json();
  return data;
};

export { DataProfile };

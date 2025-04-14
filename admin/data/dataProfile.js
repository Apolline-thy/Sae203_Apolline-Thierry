// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL;

if (window.location.hostname.includes("mmi.unilim.fr")) {
  HOST_URL = "https://mmi.unilim.fr/~thierry18/SAE2.03/";
} else {
  HOST_URL = "http://thierry-sae203.mmi-limoges.fr/";
}

let DataProfile = {};

/** DataProfile.add
 *
 * Envoie les données d’un formulaire pour ajouter un profil utilisateur.
 * Les données sont envoyées via une requête POST au serveur.
 *
 * @param {*} fdata Un objet FormData contenant les données du formulaire.
 * @returns La réponse du serveur.
 */
DataProfile.add = async function (fdata) {
  let config = {
    method: "POST", // Méthode HTTP
    body: fdata, // Données envoyées sous forme de FormData
  };

  let answer = await fetch(
    HOST_URL + "/server/script.php?todo=addProfile",
    config
  );

  let data = await answer.json();
  return data;
};

/** DataProfile.add
 *
 * Envoie les données d’un formulaire pour ajouter un profil utilisateur.
 * Les données sont envoyées via une requête POST au serveur.
 *
 * @param {*} fdata Un objet FormData contenant les données du formulaire.
 * @returns La réponse du serveur.
 */
DataProfile.modify = async function (fdata) {
  let config = {
    method: "POST", // Méthode HTTP
    body: fdata, // Données envoyées sous forme de FormData
  };

  let answer = await fetch(
    HOST_URL + "/server/script.php?todo=modifyProfile",
    config
  );

  let data = await answer.json();
  return data.message;
};

DataProfile.read = async function () {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=readProfiles");
  if (!answer.ok) {
    throw new Error(`Erreur HTTP : ${answer.status}`);
  }
  let data = await answer.json();
  console.log("Profils récupérés :", data);
  return data;
};

export { DataProfile };

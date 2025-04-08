// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~thierry18/SAE2.03/"; //"http://mmi.unilim.fr/~????"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataProfile = {};

DataProfile.read = async function () {
  try {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readProfiles");
    if (!answer.ok) {
      throw new Error(`Erreur HTTP : ${answer.status}`);
    }
    let data = await answer.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des profils :", error);
    return null; // Ou une valeur par défaut
  }
};

export { DataProfile };

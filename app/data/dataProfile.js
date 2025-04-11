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
    console.log("Profils récupérés :", data);
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des profils :", error);
    return null; // Ou une valeur par défaut
  }
};

DataProfile.getFavoris = async function () {
  let response = await fetch(
    `${HOST_URL}/server/script.php?todo=getFavoris&id=${id}`
  );
  let data = await response.json();
  return data;
};

export { DataProfile };

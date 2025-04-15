// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL;

if (window.location.hostname.includes("mmi.unilim.fr")) {
  HOST_URL = "https://mmi.unilim.fr/~thierry18/SAE2.03/";
} else {
  HOST_URL = "http://thierry-sae203.mmi-limoges.fr/";
}

let DataMovie = {};

/** DataMenu.update
 *
 * Prend en paramètre un objet FormData (données de formulaire) à envoyer au serveur.
 * Ces données sont incluses dans une requête HTTP en méthode POST.
 * Une requête POST au lieu de GET n'affiche pas les données dans l'URL (plus discret).
 * Les données sont placées dans le corps (body) de la requête HTTP. Elles restent visibles mais
 * en utilisant les outils de développement du navigateur (Network > Payload).
 * La requête comprend aussi un paramètre todo valant update pour indiquer au serveur qu'il
 * s'agit d'une mise à jour (car on a codé le serveur pour qu'il sache quoi faire en fonction de la valeur de todo).
 *
 * @param {*} fdata un objet FormData contenant les données du formulaire à envoyer au serveur.
 * @returns la réponse du serveur.
 */
DataMovie.add = async function (fdata) {
  // fetch possède un deuxième paramètre (optionnel) qui est un objet de configuration de la requête HTTP:
  //  - method : la méthode HTTP à utiliser (GET, POST...)
  //  - body : les données à envoyer au serveur (sous forme d'objet FormData ou bien d'une chaîne de caractères, par exempe JSON)
  let config = {
    method: "POST", // méthode HTTP à utiliser
    body: fdata, // données à envoyer sous forme d'objet FormData
  };
  let answer = await fetch(
    HOST_URL + "/server/script.php?todo=addMovie",
    config
  );
  let data = await answer.json();
  return data;
};

DataMovie.rechercherMovies = async function (searchQuery) {
  let response = await fetch(
    `${HOST_URL}/server/script.php?todo=rechercherMovies&query=${encodeURIComponent(
      searchQuery
    )}`
  );

  console.log("Réponse brute du serveur :", response);

  if (!response.ok) {
    console.error("Erreur HTTP :", response.status);
    return [];
  }

  let data = await response.json();
  console.log("Données JSON :", data);
  return data;
};

DataMovie.updateFeature = async function (id, featuredValue) {
  let response = await fetch(
    `${HOST_URL}/server/script.php?todo=updateFeature&id=${id}&featured=${featuredValue}`
  );

  if (!response.ok) {
    console.error("Erreur HTTP :", response.status);
    return { success: false };
  }

  let data = await response.json();
  console.log("Données JSON :", data);
  return data;
};

export { DataMovie };

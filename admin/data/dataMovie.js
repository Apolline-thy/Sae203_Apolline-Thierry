
// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~thierry18/SAE2.03";//"http://mmi.unilim.fr/~????"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataMovie = {};

DataMovie.add = async function (formData) {
    try {
        const response = await fetch(`${HOST_URL}/server/movies`, { // Adaptation de l'URL si nécessaire
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData) // Conversion des données du formulaire au format JSON
        });
    
        if (response.ok) {
          const result = await response.json();
          console.log("Le film a été ajouté avec succès :", result);
          alert("Le film a été ajouté avec succès.");
          return result;
        } else {
          const error = await response.json();
          console.error("Erreur lors de l'ajout du film :", error);
          alert("Erreur : " + error.message);
          throw new Error(error.message);
        }
      } catch (err) {
        console.error("Erreur de connexion au serveur :", err);
        alert("Erreur de connexion au serveur : " + err.message);
      }
    };

export {DataMovie};

let templateFile = await fetch("./component/Mis_en_avant/template.html");
let template = await templateFile.text();

let templateFile2 = await fetch("./component/Mis_en_avant/templateCard.html");
let templateCards = await templateFile2.text();

let Mis_en_avant = {};

Mis_en_avant.format = function (obj) {
  let html = template; // Le template principal du carrousel
  let cardsHTML = ""; // Cette variable va contenir toutes les cartes générées

  // Pour chaque film, on génère une carte
  for (let c of obj) {
    let card = templateCards; // Template pour chaque carte

    // Remplacer les placeholders dans le template de la carte
    card = card.replace("{{name}}", c.name);
    card = card.replace("{{image}}", c.image);
    card = card.replace("{{description}}", c.description);
    card = card.replace("{{handler}}", `C.handlerDetail(${c.id})`);
    card = card.replaceAll("{{id}}", c.id);

    // Ajouter chaque carte au HTML global des cartes
    cardsHTML += card;
  }

  // Remplacer {{cards}} par toutes les cartes générées
  html = html.replace("{{cards}}", cardsHTML);

  return html;
};

export { Mis_en_avant };

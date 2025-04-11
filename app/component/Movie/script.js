let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let templateFile2 = await fetch("./component/Movie/templateCard.html");
let templateCards = await templateFile2.text();

let Movie = {};

Movie.format = function (obj) {
  let html = template;
  let cardsHTML = "";

  for (let c of obj) {
    let card = templateCards;
    card = card.replace("{{name}}", c.name);
    card = card.replace("{{image}}", c.image);
    card = card.replace("{{handler}}", `C.handlerDetail(${c.id})`);
    card = card.replace("{{handlerFavoris}}", `C.handlerFavoris(${c.id})`);

    cardsHTML += card;
  }

  // Remplacer le placeholder {{cards}} dans le template principal par les cartes générées
  html = html.replace("{{cards}}", cardsHTML);
  return html;
};

export { Movie };

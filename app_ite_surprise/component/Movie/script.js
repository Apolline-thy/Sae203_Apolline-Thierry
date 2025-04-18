let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let templateFile2 = await fetch("./component/Movie/templateCard.html");
let templateCards = await templateFile2.text();

let Movie = {};

Movie.format = function (movies) {
  let html = template;
  let cardsHTML = "";

  for (let movie of movies) {
    let card = templateCards;
    card = card.replace("{{image}}", movie.image);
    card = card.replace("{{handler}}", `C.handlerDetail(${movie.id})`);
    card = card.replace("{{handlerFavoris}}", `C.handlerFavoris(${movie.id})`);
    card = card.replace(
      "{{handlerdeleteFavoris}}",
      `C.handlerdeleteFavoris(${movie.id})`
    );
    card = card.replaceAll("{{id}}", movie.id);

    cardsHTML += card;
  }

  html = html.replace("{{cards}}", cardsHTML);
  return html;
};

export { Movie };

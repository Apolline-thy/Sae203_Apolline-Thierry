// let templateFile = await fetch("./component/Movie/template.html");
// let template = await templateFile.text();

// let templateFile2 = await fetch("./component/Movie/templateCard.html");
// let templateCards = await templateFile2.text();

// let Movie = {};

// Movie.format = function (obj) {
//     let html = template;
//     let cardsHTML ="";
//   for (let c of obj){ 
//    let card = templateCards;
//    card = card.replace ("{{name}}", c.name);
//    card = card.replace ("{{image}}", c.image);
//    cardsHTML += card;
//   }

//   html = html.replace("{{cards}}", cardsHTML);
//    return html;
// };

// export { Movie };

// app/component/Movie/script.js

let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let templateFile2 = await fetch("./component/Movie/templateCard.html");
let templateCards = await templateFile2.text();

let Movie = {};

Movie.format = function (obj) {
  let html = template;
  let cardsHTML = "";

  // Si obj est un tableau de films
  if (Array.isArray(obj)) {
    for (let c of obj) {
      let card = templateCards;

      // Remplacer les placeholders avec les données du film
      card = card.replace("{{name}}", c.name);  // Nom du film
      card = card.replace("{{image}}", c.image); // Image du film

      // Ajouter un attribut onclick à l'image ou à un autre élément du film pour afficher les détails
      card = card.replace(
        "{{handler}}", 
        `C.handlerDetail(${c.id})`  // Ajout du handler pour l'ID du film
      );

      cardsHTML += card;
    }

    html = html.replace("{{cards}}", cardsHTML);  // Insérer les cartes de films dans le template
  }

  return html;
};

export { Movie };


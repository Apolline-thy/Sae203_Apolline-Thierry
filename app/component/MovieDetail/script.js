let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();


let MovieDetail = {};

MovieDetail.format = function (film) {
    let html = template; 
   html = html.replace ("{{titre}}", film.titre);
   html = html.replace ("{{image}}", film.image);
   html = html.replace ("{{trailer}}", film.trailer);
   html = html.replace ("{{description}}", film.description);
   html = html.replace ("{{annee}}", film.annee);
   html = html.replace ("{{realisateur}}", film.realisateur);
   html = html.replace ("{{categorie}}", film.categorie);
      html = html.replace ("{{restriction}}", film.restriction);

     return html;
  }

export { MovieDetail };
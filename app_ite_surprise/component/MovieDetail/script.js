let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();

let MovieDetail = {};

MovieDetail.format = function (film) {
  let html = template;
  html = html.replace("{{name}}", film.name);
  html = html.replace("{{image}}", film.image);
  html = html.replace("{{trailer}}", film.trailer);
  html = html.replace("{{description}}", film.description);
  html = html.replace("{{year}}", film.year);
  html = html.replace("{{director}}", film.director);
  html = html.replace("{{category}}", film.category);
  html = html.replace("{{min_age}}", film.min_age);

  return html;
};

export { MovieDetail };

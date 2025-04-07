import { Movie } from "../Movie/script.js";

let templateFile = await fetch("./component/MovieCategory/template.html");
let template = await templateFile.text();

let MovieCategory = {};

MovieCategory.format = function (category) {
  let categoryHtml = template;
  categoryHtml = categoryHtml.replace("{{categoryName}}", category.name);

  // Ensure category.movies is passed to Movie.format
  let cardsHtml = Movie.format(category.movies || []);
  categoryHtml = categoryHtml.replace("{{cards}}", cardsHtml);

  return categoryHtml;
};

export { MovieCategory };

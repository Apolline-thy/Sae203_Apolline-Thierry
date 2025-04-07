import {Movie} from "./component/Movie/script.js";

let templateFile = await fetch("./component/MovieCategory/template.html");
let template = await templateFile.text();


let MovieCategory = {};

MovieCategory.format = function (film) {
    let html = template; 
   html = html.replace ("{{category}}", film.category);
   html = html.replace ("{{cards}}", film.cards);


   return html;
  }

export { MovieCategory };



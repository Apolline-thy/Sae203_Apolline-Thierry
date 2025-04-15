let templateFile = await fetch("./component/ModifyFeature/template.html");
let template = await templateFile.text();
let templateFile2 = await fetch(
  "./component/ModifyFeature/templateResults.html"
);
let templateResults = await templateFile2.text();

let ModifyFeature = {};

ModifyFeature.format = function (results) {
  let html = template;
  let resultsHTML = "";
  if (results && results.length > 0) {
    for (let r of results) {
      let resultsHTML = templateResults;
      results = results.replace("{{name}}", r.name);
      results = results.replace("{{category}}", r.category);
      results = results.replace("{{year}}", r.year);
      results = results.replace("{{featured}}", r.featured);
      results = results.replace(
        "{{handlerModifyFeature}}",
        `C.handlerModifyFeature(${r.id})`
      );

      resultsHTML += results;
    }
  } else {
    // Si aucun résultat, afficher un message par défaut
    resultsHTML = "<p>Aucun résultat trouvé pour cette recherche.</p>";
  }

  html = html.replace(
    "{{handlerRechercherAdmin}}",
    "C.handlerRechercherAdmin()"
  );
  html = html.replace("{{results}}", resultsHTML);
  return html;
};

export { ModifyFeature };

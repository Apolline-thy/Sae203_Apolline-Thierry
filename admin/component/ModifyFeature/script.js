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

  for (let r of results) {
    let results = templateResults;
    results = results.replace("{{name}}", r.name);
    results = results.replace("{{category_name}}", r.category_name);
    results = results.replace("{{year}}", r.year);
    results = results.replace("{{featured}}", r.featured);
    resultHTML = resultHTML.replace(
      "{{handlerModifyFeature}}",
      `C.handlerModifyFeature(${r.id})`
    );

    resultsHTML += results;
  }

  html = html.replace(
    "{{handlerRechercherAdmin}}",
    "C.handlerRechercherAdmin()"
  );
  html = html.replace("{{results}}", resultsHTML);
  return html;
};

export { ModifyFeature };

let templateFile = await fetch("./component/ModifyFeature/template.html");
let template = await templateFile.text();

let ModifyFeature = {};

ModifyFeature.format = function (handler) {
  let html = template;
  html = html.replace("{{handler}}", handler);
  return html;
};

export { ModifyFeature };

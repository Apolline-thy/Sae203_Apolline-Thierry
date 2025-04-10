let templateFile = await fetch("./component/ModifyProfile/template.html");
let template = await templateFile.text();

let ModifyProfile = {};

ModifyProfile.format = function (handler, profiles) {
  let html = template;
  let options = `<option value="">Choisir un profil</option>`;
  for (let i = 0; i < profiles.length; i++) {
    let p = profiles[i];
    options += `<option value="${p.id}" data-name="${p.name}" data-avatar="${p.avatar}" data-date_naissance="${p.date_naissance}">${p.name}</option>`;
  }

  html = html.replace("{{handler}}", handler);
  html = html.replace("{{handlerModify}}", "C.handlerProfileModify()");
  html = html.replace("{{profiles}}", options);
  return html;
};

export { ModifyProfile };

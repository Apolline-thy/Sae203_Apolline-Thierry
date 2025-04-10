let templateFile = await fetch("./component/ModifyProfile/template.html");
let template = await templateFile.text();
let templateFile2 = await fetch(
  "./component/ModifyProfile/templateProfile.html"
);
let templateProfile = await templateFile2.text();

let ModifyProfile = {};

ModifyProfile.format = function (profiles) {
  let html = template;
  let profilesHTML = "";

  for (let p of profiles) {
    let profile = templateProfile;
    profile = profile.replace("{{name}}", p.name);
    profile = profile.replace("{{id}}", p.id);

    profilesHTML += profile;
  }

  html = html.replace("{{handlerSelect}}", "C.handlerSelectProfile()");
  html = html.replace("{{handlerModify}}", "C.handlerProfileModify()");
  html = html.replace("{{profiles}}", profilesHTML);
  return html;
};

export { ModifyProfile };

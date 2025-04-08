let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let NavBar = {};

NavBar.format = function (hAbout, profiles) {
  let html = template;
  html = html.replace("{{hAbout}}", hAbout);

  let options = `<option value="" data-img="" data-age="0">Choisir un profil</option>`; // Option par défaut
  for (let i = 0; i < profiles.length; i++) {
    let p = profiles[i];
    options += `<option value="${p.id}" data-img="${p.avatar}" data-age="${p.min_age}">${p.name}</option>`;
  }

  // let image =
  //   profiles[0]?.avatar ||
  //   "https://mmi.unilim.fr/~thierry18/SAE2.03/server/images/avatar.jpg";

  html = html.replace("{{profiles}}", options);

  return html;
};

export { NavBar };

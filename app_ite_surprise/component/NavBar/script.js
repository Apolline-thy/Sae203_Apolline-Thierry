let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let NavBar = {};

NavBar.format = function (hAbout, profiles) {
  let html = template;
  html = html.replace("{{hAbout}}", hAbout);
  html = html.replace("{{hFavoris}}", "C.handlerFavorisList()");

  let options = `<option value="" data-age="0" data-img="">Choisir un profil</option>`;
  for (let i = 0; i < profiles.length; i++) {
    let p = profiles[i];
    options += `<option value="${p.id}" data-age="${p.age}" data-img="../server/images/${p.avatar}">${p.name}</option>`;
  }

  console.log("Options générées :", options); // Vérifiez ici

  let image = "../server/images/default-avatar.svg";

  html = html.replace("{{image}}", image);
  html = html.replace("{{profiles}}", options);
  html = html.replace("{{handler}}", "C.handlerProfileChange()");
  html = html.replace("{{handlerRechercher}}", "C.handlerRechercher()");

  return html;
};

export { NavBar };

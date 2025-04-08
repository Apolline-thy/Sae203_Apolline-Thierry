let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let NavBar = {};

NavBar.format = function (hAbout, profiles) {
  let html = template;
  html = html.replace("{{hAbout}}", hAbout);

  let options = `<option value="" data-age="0" data-img="">Choisir un profil</option>`;
  for (let i = 0; i < profiles.length; i++) {
    let p = profiles[i];
    options += `<option value="${p.id}" data-age="0" data-img="https://mmi.unilim.fr/~thierry18/SAE2.03/server/images/${p.avatar}">${p.name}</option>`;
  }
  console.log("Options générées :", options); // Vérifiez les options ici

  let image = profiles[0]?.avatar
    ? `https://mmi.unilim.fr/~thierry18/SAE2.03/server/images/${profiles[0].avatar}`
    : "https://mmi.unilim.fr/~thierry18/SAE2.03/server/images/default-avatar.jpg";

  html = html.replace("{{image}}", image);
  html = html.replace("{{profiles}}", options);
  html = html.replace("{{handler}}", "C.handlerProfileChange");

  return html;
};

export { NavBar };

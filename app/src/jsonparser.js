import menu from "./content/menu.json";

function menuItem(label, link) {
  this.label = label;
  this.link = link;
}

export function getMenuInLanguage(language) {
  var output = [];
  for (let i = 0; i < menu.length; i++) {
    const item = new menuItem(menu[i][language], menu[i].link);
    output.push(item);
  }
  return output;
}

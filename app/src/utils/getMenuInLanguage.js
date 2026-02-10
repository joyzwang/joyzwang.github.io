import menu from "../content/menu.json";
import { Languages } from "./languages";

function menuItem(label, link) {
  this.label = label;
  this.link = link;
}

export function getMenuInLanguage(language) {
  var output = [];

  if (!(language in Languages)) {
    language = Languages.en;
  }

  for (let i = 0; i < menu.length; i++) {
    const thisMenuItem = menu[i];
    const item = new menuItem(thisMenuItem[language], thisMenuItem.link);
    output.push(item);
  }
  return output;
}

import pages from "../content/pages.json";
import { Languages } from "../content";

function Page(title, highlight, body) {
  this.title = title;
  this.highlight = highlight;
  this.body = body;
}

export function getPageInLanguage(title, language) {
  const thisPage = pages[title.toLowerCase()];
  if (!thisPage) {
    return null;
  }

  if (!(language in Languages)) {
    language = Languages.en;
  }

  return new Page(
    thisPage[language].title,
    thisPage[language].highlight,
    thisPage[language].body,
  );
}

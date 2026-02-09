import { sanitized } from "./utils/sanitize.js";
import { useOutletContext } from "react-router-dom";
import { getPageInLanguage } from "./utils/getPageInLanguage.js";

function Home({ language }) {
  const content = getPageInLanguage("home", useOutletContext(language));

  for (const key in content) {
    if (content[key] === undefined) {
      content[key] = "";
    }
    content[key] = sanitized(content[key]);
  }

  return (
    <>
      <div
        className="highlight"
        dangerouslySetInnerHTML={{ __html: content.highlight }}
      ></div>
      <h2 dangerouslySetInnerHTML={{ __html: content.title }} />
      <div
        className="body"
        dangerouslySetInnerHTML={{ __html: content.body }}
      ></div>
      <div className="pdf">[PDF Reader]</div>
    </>
  );
}

export default Home;

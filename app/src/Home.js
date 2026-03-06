import { cleanPage } from "./utils/cleanPage";
import { useOutletContext } from "react-router-dom";
import { getPageInLanguage } from "./utils/getPageInLanguage.js";
import Highlight from "./Highlight.js";

function Home({ language }) {
  var content = getPageInLanguage("home", useOutletContext(language));

  content = cleanPage(content);

  return (
    <>
      <h2 dangerouslySetInnerHTML={{ __html: content.title }} />
      <Highlight content={content.highlight} />
      <div
        className="body"
        dangerouslySetInnerHTML={{ __html: content.body }}
      ></div>
      <div className="pdf-container">
        <embed id="pdf-viewer" src="pdf/test.pdf" type="application/pdf" />
      </div>
    </>
  );
}

export default Home;

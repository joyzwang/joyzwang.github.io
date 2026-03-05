import { cleanPage } from "./utils/cleanPage";
import { useOutletContext } from "react-router-dom";
import { getPageInLanguage } from "./utils/getPageInLanguage.js";
import Highlight from "./Highlight.js";

function Home({ language }) {
  var content = getPageInLanguage("home", useOutletContext(language));

  content = cleanPage(content);

  console.log(content.highlight);

  return (
    <>
      <Highlight content={content.highlight} />
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

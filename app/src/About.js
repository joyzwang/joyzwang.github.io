import { cleanPage } from "./utils/cleanPage";
import { getPageInLanguage } from "./utils/getPageInLanguage";
import { useOutletContext } from "react-router-dom";
import Highlight from "./Highlight";

function About({ language }) {
  var content = getPageInLanguage("about", useOutletContext(language));

  content = cleanPage(content);

  return (
    <>
      <Highlight content={content.highlight} />
      <h2 dangerouslySetInnerHTML={{ __html: content.title }} />
      <div
        className="body"
        dangerouslySetInnerHTML={{ __html: content.body }}
      ></div>
    </>
  );
}

export default About;

import { cleanPage } from "./utils/cleanHTML";
import { getPageInLanguage } from "./utils/getPageInLanguage";
import { useOutletContext } from "react-router-dom";

function Submissions({ language }) {
  const content = getPageInLanguage("submissions", useOutletContext(language));

  content = cleanPage(content);

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
    </>
  );
}

export default Submissions;

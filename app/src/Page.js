import { cleanPage } from "./utils/cleanPage";
import { getPageInLanguage } from "./utils/getPageInLanguage";
import { useOutletContext } from "react-router-dom";
import Highlight from "./Highlight";

function Page({ name, language }) {
  var content = getPageInLanguage(name, useOutletContext(language));

  if (!content) {
    return <h2>Page Not Found</h2>;
  }
  
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

export default Page;

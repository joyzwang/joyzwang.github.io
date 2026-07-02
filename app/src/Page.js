import { cleanPage } from "./utils/cleanPage";
import { getPageInLanguage } from "./utils/getPageInLanguage";
import { useOutletContext } from "react-router-dom";
import Highlight from "./Highlight";

function Page({ name, pdf, language }) {
  var content = getPageInLanguage(name, useOutletContext(language));

  if (!content && !pdf) {
    return <h2>Page Not Found</h2>;
  }

  content = cleanPage(content);

  return (
    <>
      {content && (<div><h1 dangerouslySetInnerHTML={{ __html: content.title }} />
      <Highlight content={content.highlight} />
      <div
        className="body"
        dangerouslySetInnerHTML={{ __html: content.body }}
      ></div></div>)}

      {pdf === "true" && (
        <>
        <div className="pdf-container">
          <embed id="pdf-viewer" src="pdf/btlm.pdf" type="application/pdf" />
        </div>
        If the embed does not work for you, please click <a href='https://drive.google.com/file/d/119VO13tUkD2nCPCIap4qsE_d8nDl2Jun/view'>here</a>.
        </>
      )}
    </>
  );
}

export default Page;

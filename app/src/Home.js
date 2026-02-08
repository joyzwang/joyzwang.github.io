import { homeContent, Languages } from "./content.js";
import { useOutletContext } from "react-router-dom";

function Home({ language }) {
  const pageLanguage = useOutletContext(language);

  const content =
    pageLanguage === Languages.cn ? homeContent.cn : homeContent.en;

  return (
    <>
      <div className="highlight">{content.notification}</div>
      {content.content}
      <div className="pdf">[PDF Reader]</div>
    </>
  );
}

export default Home;

import { homeContent } from "./content.js";
import { useOutletContext } from "react-router-dom";

function Home({ language }) {
  const content = homeContent[useOutletContext(language)];

  const markup = { __html: content.heading };

  return (
    <>
      <div className="highlight">{content.notification}</div>
      <h2 dangerouslySetInnerHTML={markup} />
      <div className="pdf">[PDF Reader]</div>
    </>
  );
}

export default Home;

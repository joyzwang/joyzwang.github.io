import { homeContent } from "./content.js";
import { useOutletContext } from "react-router-dom";

function Home({ language }) {
  const content = homeContent[useOutletContext(language)];

  return (
    <>
      <div className="highlight">{content.notification}</div>
      <h2>{content.heading}</h2>
      <div className="pdf">[PDF Reader]</div>
    </>
  );
}

export default Home;

import { useState } from "react";
import { homeContent } from "./content.js";

function Home() {
  const [content, setContent] = useState(homeContent.en);
  return (
    <>
      <div className="highlight">{content.notification}</div>
      {content.content}
    </>
  );
}

export default Home;

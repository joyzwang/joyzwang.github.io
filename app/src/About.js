import { aboutContent } from "./content.js";
import { useOutletContext } from "react-router-dom";

function About({ language }) {
  const content = aboutContent[useOutletContext(language)];

  return (
    <>
      <h2> {content.heading1} </h2>
      <p>{content.p1} </p>
      <h2> {content.heading2} </h2>
      <p>{content.p2} </p>
    </>
  );
}

export default About;

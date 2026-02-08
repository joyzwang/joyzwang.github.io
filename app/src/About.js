import { aboutContent, Languages } from "./content.js";
import { useOutletContext } from "react-router-dom";

function About({ language }) {
  const pageLanguage = useOutletContext(language);

  const content =
    pageLanguage === Languages.cn ? aboutContent.cn : aboutContent.en;

  return (
    <>
      <h2> {content.heading1} </h2>
      <p>{content.heading2} </p>
      <h2> {content.heading2} </h2>
      <p>{content.heading2} </p>
    </>
  );
}

export default About;

import { Outlet, Link } from "react-router-dom";
import { Languages, navbarContent } from "./content";
import { useEffect, useState } from "react";
import { getMenuInLanguage } from "./jsonparser";
import "./style.css";

function Header() {
  var defaultLanguage = localStorage.getItem("language");
  if (defaultLanguage in Languages === false) {
    defaultLanguage = Languages.en;
  }

  var [language, setLanguage] = useState(defaultLanguage);

  function toggleLanguage() {
    const currentLanguage = localStorage.getItem("language");

    var updatedLanguage;
    currentLanguage === Languages.en
      ? (updatedLanguage = Languages.cn)
      : (updatedLanguage = Languages.en);

    localStorage.setItem("language", updatedLanguage);
    setLanguage(updatedLanguage);
  }

  const content = navbarContent[language];

  useEffect(() => {
    getMenuInLanguage(language);
  }, []);

  return (
    <>
      <div className="header">
        <Link className="site-title" to="/">
          {" "}
          Between the Lines Magazine{" "}
        </Link>

        <Link className="nav-label" to="/about">
          {content.about}
        </Link>
        <Link className="nav-label" to="/submissions">
          {content.submissions}
        </Link>

        <div> </div>

        <input
          type="button"
          id="toggle-language"
          value="🌐"
          onClick={() => toggleLanguage()}
        />
      </div>
      <Outlet context={language} />
    </>
  );
}

function navMenu(menu, language) {
  var menuMarkdown = "";
  if (!(language in Languages)) {
    language = Languages.en;
  }
  for (let i = 0; i < menu.length; i++) {
    menuMarkdown += `<Link className="nav-label" to=${menu[i].link}>${menu[i].language}</Link>`;
  }

  return;
}

export default Header;

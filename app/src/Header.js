import { Outlet, Link } from "react-router-dom";
import { Languages, navbarContent } from "./content";
import { useState } from "react";
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
        <Link className="nav-label" to="/submit">
          {content.submissions}
        </Link>

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

export default Header;

import { Outlet } from "react-router-dom";
import { Languages } from "./content";
import { useState } from "react";

function Header() {
  var [language, setLanguage] = useState(Languages.en);

  function toggleLanguage() {
    const currentLanguage = localStorage.getItem("language");

    var updatedLanguage;
    currentLanguage === Languages.en
      ? (updatedLanguage = Languages.cn)
      : (updatedLanguage = Languages.en);

    localStorage.setItem("language", updatedLanguage);
    setLanguage(updatedLanguage);
  }

  return (
    <>
      <div className="header">
        Between the Lines Magazine
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

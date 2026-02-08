import { Outlet } from "react-router-dom";
import { Languages } from "./content";
import { useEffect, useState } from "react";

function Header() {
  var [language, setLanguage] = useState(Languages.en);

  useEffect(() => {
    var currentLanguage = localStorage.getItem("language");
    console.log(currentLanguage);
    if (!currentLanguage) {
        setLanguage(currentLanguage);
    }
  }, []);

  function toggleLanguage() {
    const currentLanguage = localStorage.getItem("language");
    currentLanguage === Languages.en
      ? localStorage.setItem("language", Languages.cn)
      : localStorage.setItem("language", Languages.en);
    setLanguage(localStorage.getItem("language"));
  }

  return (
    <>
      <div className="header">
        Between the Lines Magazine
        <input
          type="button"
          id="toggle-language"
          value="Switch"
          onClick={() => toggleLanguage()}
        />
      </div>
      <Outlet context={language} />
    </>
  );
}

export default Header;

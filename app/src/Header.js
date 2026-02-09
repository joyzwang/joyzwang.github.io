import { Outlet, Link } from "react-router-dom";
import { Languages } from "./content";
import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import "./style.css";

function Header() {
  var [language, setLanguage] = useState(Languages.en);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage && storedLanguage in Languages) {
      setLanguage(localStorage.getItem("language"));
    }
  }, []);

  function toggleLanguage() {
    const currentLanguage = localStorage.getItem("language");
    const updatedLanguage = (currentLanguage === Languages.en) ? Languages.cn : Languages.en;

    localStorage.setItem("language", updatedLanguage);
    setLanguage(updatedLanguage);
  }

  return (
    <>
      <div className="header">
        <Link className="site-title" to="/">
          {" "}
          Between the Lines Magazine{" "}
        </Link>

        <NavMenu context={language} />
      </div>

      <div className='language-toggle'>
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

import { Outlet, Link } from "react-router-dom";
import { Languages, navbarContent } from "./content";
import { useContext, useEffect, useState } from "react";
import { getMenuInLanguage } from "./utils/getMenuInLanguage";
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
        <Link className="site-title" to="/">
          {" "}
          Between the Lines Magazine{" "}
        </Link>

        <NavMenu context={language} />
      </div>

      <div>
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

function NavMenu(language) {
  const menu = getMenuInLanguage(language.context);

  return (
    <>
      {menu.map((item) => {
        return (
          <li key={item.link}>
            <Link to={item.link}>{item.label}</Link>
          </li>
        );
      })}
    </>
  );
}

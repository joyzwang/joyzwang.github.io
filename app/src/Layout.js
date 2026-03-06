import { Outlet, Link } from "react-router-dom";
import { Languages, defaultLanguage } from "./utils/languages";
import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import "./style.css";

function Layout() {
  var [language, setLanguage] = useState(defaultLanguage);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage && storedLanguage in Languages) {
      setLanguage(localStorage.getItem("language"));
    }
  }, []);

  function toggleLanguage() {
    const currentLanguage = localStorage.getItem("language");
    const updatedLanguage =
      currentLanguage === Languages.en ? Languages.cn : Languages.en;

    localStorage.setItem("language", updatedLanguage);
    setLanguage(updatedLanguage);
  }

  return (
    <div className="body-container">
      <div className="header">
        <Link className="site-title" to="/">
          {" "}
          Between the Lines Magazine{" "}
        </Link>

        <NavMenu className="nav-menu" context={language} />
        <div className="language-toggle">
          <input
            type="button"
            id="toggle-language"
            value="🌐"
            onClick={() => toggleLanguage()}
          />
        </div>
      </div>
      <div className="content-container">
        <Outlet context={language} />
      </div>
    </div>
  );
}
export default Layout;

import { Outlet, NavLink } from "react-router-dom";
import { Languages, defaultLanguage } from "./utils/languages";
import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

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
    <>
      <div className="body-container">
        <div className="header">
          <NavLink to="/" className="site-title">
            <a>
              <img src="logo.png" alt="logo" className="site-logo" />
            </a>
          </NavLink>

          <NavMenu className="nav-menu" context={language} />

          <div className="language-toggle" id="language-toggle-div">
            <input
              type="image"
              alt="Toggle Language"
              id="toggle-language"
              src="language-switcher.png"
              onClick={() => toggleLanguage()}
            />
          </div>
        </div>

        <div className="content-container">
          <Outlet context={language} />
        </div>

        <Footer />
      </div>
    </>
  );
}
export default Layout;

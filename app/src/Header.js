import { Outlet } from "react-router-dom";
import { Languages } from "./content";
import { useEffect, useState } from "react";

function Header() {
  const [language, setLanguage] = useState(Languages.en);

  useEffect(() => {
    var language = localStorage.getItem("language");

    if (!language || (language !== Languages.en && language !== Languages.cn)) {
      localStorage.setItem("language", Languages.en);
    } else {
      setLanguage(language);
    }
  }, []);

  return (
    <>
      <div className="header">Home</div>
      <Outlet context={language} />
    </>
  );
}

export default Header;

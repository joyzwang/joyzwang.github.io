import { Link } from "react-router-dom";
import { getMenuInLanguage } from "./utils/getMenuInLanguage";

function NavMenu(language) {
  const menu = getMenuInLanguage(language.context);

  return (
    <>
      {menu.map((item) => {
        return (
          <div className="nav-item" key={item.link}>
            <Link to={item.link}>{item.label}</Link>
          </div>
        );
      })}
    </>
  );
}
export default NavMenu;

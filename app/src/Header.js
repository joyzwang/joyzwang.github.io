import { Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">Home</div>
      <Outlet />
    </>
  );
}

export default Header;

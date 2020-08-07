import React from "react";
import HeaderLogo from "../header-logo/header-logo.jsx";
import HeaderUser from "../header-user/header-user.jsx";

const Header = () => {
  return (
    <React.Fragment>
      <header className="page-header movie-card__head">
        <HeaderLogo/>
        <HeaderUser/>
      </header>
    </React.Fragment>
  );
};

export default Header;


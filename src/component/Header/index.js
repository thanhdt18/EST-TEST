import React from "react";
import logo from "../../image/logo192.png";
import "./index.scss";

const Header = ({ title }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src={logo} alt="" width="64px" className="logo" />
      <a className="navbar-brand px-5" href="/">
        {title}
      </a>
    </nav>
  );
};

export default Header;

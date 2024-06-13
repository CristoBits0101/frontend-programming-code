import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = ({ onNavigate }) => {
  return (
    <header>
      <Navbar onNavigate={onNavigate} />
    </header>
  );
};

export default Header;

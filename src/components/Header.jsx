import React from "react";
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import Services from "./Services";
const Header = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Services />
    </div>
  );
};

export default Header;

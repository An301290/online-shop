import React from "react";
import { Nav } from "./NavBar.style";
import StorefrontIcon from "@material-ui/icons/Storefront";

const NavBar: React.FC = () => (
  <Nav>
    <div className="main-title">
        <StorefrontIcon />
      <h1>AllYouNeed</h1>
    </div>
  </Nav>
);

export default NavBar;

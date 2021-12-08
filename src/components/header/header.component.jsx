import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/crown.svg";

import "./header.styles.scss";

const header = () => (
  <div className="header">
    <Link classname="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="shop">
        SHOP
      </Link>
      <Link className="option" to="shop">
        CONTACT
      </Link>
    </div>
  </div>
);

export default header;
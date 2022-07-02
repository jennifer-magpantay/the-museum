import React from "react";

export const Nav = () => {
  return (
    <nav className="navigation" aria-label="Main Navigation" role="navigation">
      <ul className="navigation--list" role="menu">
        <li className="navigation--list-item" role="menuitem">
          {/* replace a href by Link from React Router Dom */}
          <a className="navigation--link" href="http://">
            visita
          </a>
        </li>
        <li className="navigation--list-item" role="menuitem">
          <a className="navigation--link" href="http://">
            Cosa vedere
          </a>
        </li>
        <li className="navigation--list-item" role="menuitem">
          <a className="navigation--link" href="http://">
            chi siamo
          </a>
        </li>
        <li className="navigation--list-item" role="menuitem">
          <a className="navigation--link" href="http://">
            attività
          </a>
        </li>
        <li className="navigation--list-item" role="menuitem">
          <a className="navigation--link" href="http://">
            agenda
          </a>
        </li>
      </ul>
    </nav>
  );
};

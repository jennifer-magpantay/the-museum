import React from "react";

export const Nav = () => {
  return (
    <nav className="navigation">
      <ul className="navigation--list">
        <li className="navigation--list-item">
          {/* replace a href by Link from React Router Dom */}
          <a className="navigation--link" href="http://">
            visita
          </a>
        </li>
        <li className="navigation--list-item">
          <a className="navigation--link" href="http://">
            Cosa vedere
          </a>
        </li>
        <li className="navigation--list-item">
          <a className="navigation--link" href="http://">
            chi siamo
          </a>
        </li>
        <li className="navigation--list-item">
          <a className="navigation--link" href="http://">
            attività
          </a>
        </li>
        <li className="navigation--list-item">
          <a className="navigation--link" href="http://">
            agenda
          </a>
        </li>
      </ul>
    </nav>
  );
};

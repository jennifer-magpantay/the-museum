import { List } from "phosphor-react";

export const NavMobile = () => {
  return (
    <nav className="navigation--mobile" aria-label="Mobile Navigation" role="navigation">
      <button className="button--menu-icon">
        <span className="visually-hidden">Menu</span>
        <List size={32} weight="bold" color="#ffffff" />
      </button>
    </nav>
  );
};

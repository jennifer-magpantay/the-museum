import Logo from "../assets/Logo.svg";

interface Props {
  children?: React.ReactNode;
}
export const Header = ({ children }: Props) => {
  return (
    <header className="header">
      {/* skip content link */}
      <a className="skip-content-link" href="#main">
        Skip to the main content
      </a>
      <img className="header--logo" src={Logo} alt="The Museum" />
      {children}
    </header>
  );
};

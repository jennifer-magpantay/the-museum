import Logo from "../assets/Logo.svg";

interface Props {
  children?: React.ReactNode;
}
export const Header = ({ children }: Props) => {
  return (
    <header className="header">
      <img className="header--logo" src={Logo} alt="The Museum" />
      {children}
    </header>
  );
};

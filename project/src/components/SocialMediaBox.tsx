import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";

export const SocialMediaBox = () => {
  return (
    <div className="box--container">
      <ul className="box--list">
        <li className="box--list-item">EN</li>
        <li className="box--list-item">
          <FacebookLogo size={22} color="#ffffff" />
        </li>
        <li className="box--list-item">
          <InstagramLogo size={22} color="#ffffff" />
        </li>
        <li className="box--list-item">
          <TwitterLogo size={22} color="#ffffff" />
        </li>
      </ul>
    </div>
  );
};

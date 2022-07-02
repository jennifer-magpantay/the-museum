import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";

export const SocialMediaBox = () => {
  return (
    <div className="box--container">
      <ul className="box--list">
        <li className="box--list-item language">
          <select className="language--select">
            <option>ENG</option>
            <option>ITA</option>
          </select>
        </li>
        <li className="box--list-item icon">
          <a className="list--link" href="http://">
            <span className="visually-hidden">Visit our Facebook page</span>
            <FacebookLogo size={28} color="#ffffff" weight="fill" />
          </a>
        </li>
        <li className="box--list-item icon">
          <a className="list--link" href="http://">
            <span className="visually-hidden">Visit our Instagram profile</span>
            <InstagramLogo size={28} color="#ffffff" weight="bold" />
          </a>
        </li>
        <li className="box--list-item icon">
          <a className="list--link" href="http://">
            <span className="visually-hidden">Visit our Twiter page</span>
            <TwitterLogo size={28} color="#ffffff" weight="fill" />
          </a>
        </li>
      </ul>
    </div>
  );
};

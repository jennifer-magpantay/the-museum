import {
  MapPin,
  FacebookLogo,
  TwitterLogo,
  YoutubeLogo,
  PinterestLogo,
  InstagramLogo,
  Phone,
  Envelope,
} from "phosphor-react";
import Partner from "../assets/partner.svg";

import { FormSubscription } from "./FormSubscription";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--container-content">
        <div className="content--info">
          <div className="content--info-header">
            <p className="content--header-title">THE MUSEUM</p>
            <a
              className="content--header-location"
              href="https://www.google.com/maps"
            >
              <MapPin size={16} weight="fill" color="#ffffff" />
              Via Sant Ottavio, 44 - 10126 Torino
            </a>
          </div>

          <div className="content--info-body">
            <div className="content--partner">
              {/* partner */}
              <div className="container--row">
                <div className="partner--logo">
                  <img src={Partner} alt="Fiat Main Partner" />
                </div>
                <p className="partner--title">
                  <span className="line-break">Main</span> Partner
                </p>
              </div>
              {/* social */}
              <div className="content--social">
                <ul className="social--list">
                  <li className="social--list-link">
                    <a href="http://">
                      <span className="visually-hidden">Facebook</span>
                      <FacebookLogo size={22} color="#ffffff" weight="fill" />
                    </a>
                  </li>
                  <li className="social--list-link">
                    <a href="http://">
                      <span className="visually-hidden">Facebook</span>
                      <TwitterLogo size={22} color="#ffffff" weight="fill" />
                    </a>
                  </li>
                  <li className="social--list-link">
                    <a href="http://">
                      <span className="visually-hidden">Facebook</span>
                      <YoutubeLogo size={22} color="#ffffff" weight="fill" />
                    </a>
                  </li>
                  <li className="social--list-link">
                    <a href="http://">
                      <span className="visually-hidden">Facebook</span>
                      <PinterestLogo size={22} color="#ffffff" weight="fill" />
                    </a>
                  </li>
                  <li className="social--list-link">
                    <a href="http://">
                      <span className="visually-hidden">Facebook</span>
                      <InstagramLogo size={22} color="#ffffff" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="content--sitemap">
              {/* sitemap */}
              <ul className="sitemap--list">
                <li className="sitemap--list-item">STAMPA</li>
                <li className="sitemap--list-item">STATUTO E CODICE ETICO</li>
                <li className="sitemap--list-item">PRIVACY</li>
              </ul>
              {/* contact */}
              <div className="container--row">
                <span className="visually-hidden">Phone number</span>
                <Phone size={22} color="#ffffff" weight="fill" />
                <a className="contact--link-icon" href="tel:0110062713">
                  011.0062713
                </a>
              </div>

              <div className="container--row">
                <span className="visually-hidden">Email</span>
                <Envelope size={22} color="#ffffff" weight="fill" />
                <a
                  className="contact--link-icon"
                  href="mailto: info@themuseum.it"
                >
                  info@themuseum.it
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="content--subscription">
          <FormSubscription />
        </div>
      </div>

      <div className="footer--container-copyright">
        <p>2020 THE MUSEUM®</p>
        <p>Publicis Sapient</p>
      </div>
    </footer>
  );
};

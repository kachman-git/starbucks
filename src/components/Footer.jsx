import facebook from "../assets/img/social-facebook.svg";
import instagram from "../assets/img/social-instagram.svg";
import pinterest from "../assets/img/social-pinterest.svg";
import spotify from "../assets/img/social-spotify.svg";
import twitter from "../assets/img/social-twitter.svg";
import youtube from "../assets/img/social-youtube.svg";

const Footer = () => {
  return (
    <footer className="container">
      <hr className="w-full my-10" />
      <ul className="flex items-center justify-center space-x-7">
        <li>
          <a href="#">
            <img className="w-8 h-8" src={facebook} alt="facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="w-8 h-8" src={twitter} alt="twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="w-8 h-8" src={pinterest} alt="pinterest" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="w-8 h-8" src={spotify} alt="spotify" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="w-8 h-8" src={instagram} alt="instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="w-8 h-8" src={youtube} alt="youtube" />
          </a>
        </li>
      </ul>
      <div className="text-center my-9">
        © 2021 Starbucks Coffee Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

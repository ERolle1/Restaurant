import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import logo from "../../assets/gericht.png";
import styles from "../Navbar/navbar.module.css";
import { useState } from "react";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={styles.app__navbar}>
      <div className={styles.app__navbar_logo}>
        <img src={logo} alt="app logo" />
      </div>
      <ul className={styles.app__navbar_links}>
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className={styles.app__navbar_login}>
        <a href="#login" className="p__opensans">
          Login/Register
        </a>
        <div></div>
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className={styles.app__navbar_smallscreen}>
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />

        {toggleMenu && (
          <div
            className={`${styles.app__navbar_smallscreen_overlay} flex__center slide-bottom`}
          >
            <MdOutlineRestaurantMenu
              fontSize={27}
              className={styles.overlay_close}
              onClick={() => {
                setToggleMenu(false);
              }}
            />

            <ul className={styles.app__navbar_smallscreen_links}>
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">About</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">Awards</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

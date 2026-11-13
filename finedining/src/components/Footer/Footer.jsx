import styles from "../Footer/footer.module.css";
import * as images from "../../index.js";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay } from "../FooterOverlay/FooterOverlay.jsx";
import { Newsletter } from "../Newsletter/Newsletter.jsx";

export const Footer = () => {
  return (
    <div className={`${styles.app__footer} section__padding`}>
      <FooterOverlay />
      <Newsletter />

      <div className={styles.app__footer_links}>
        <div className={styles.app__footer_links_contact}>
          <h1 className={styles.app__footer_headtext}>Contact Us</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>
        <div className={styles.app__footer_links_logo}>
          <img src={images.gericht} alt="" />
          <p className="p__opensans">
            "The Best Way to Find Yourself, is to Lose Yourself in the Service
            of Others."
          </p>
          <img
            src={images.spoon}
            alt=""
            className="spoon__img"
            style={{ marginTop: "15px" }}
          />
          <div className={styles.app__footer_links_icons}>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className={styles.app__footer_links_work}>
          <h1 className={styles.app__footer_headtext}>Working Hours</h1>
          <p className="p__opensans">Monday-Friday</p>
          <p className="p__opensans">10:00 am -12:00 am</p>
          <p className="p__opensans">Saturday-Sunday</p>
          <p className="p__opensans">10:00 am - 2:00 am</p>
        </div>
      </div>

      <div className={styles.footer__copyright}>
        <p className="p__opensans">2026 Gericht. All Rights Reserved</p>
      </div>
    </div>
  );
};

import styles from "../AboutUs/aboutus.module.css";
// import G from "../../assets/G.png";
// import spoon from "../../assets/spoon.svg";
import { G, spoon, knife } from "../../index.js";
export const AboutUs = () => {
  return (
    <div className={`${styles.app__aboutus} app__bg flex__center`} id="about">
      <div className={`${styles.app__aboutus_overlay} flex__center`}>
        <img src={G} alt="" />
      </div>

      <div className={`${styles.app__aboutus_content} flex__center`}>
        <div className={styles.app__aboutus_content_about}>
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={spoon} alt="" className="spoon__img" />
          <p className="p__opensans">
            We believe that true luxury lies in intention — in the meticulous
            sourcing of our ingredients, the patience to build complex
            harmonious flavors, and the grace of thoughtful hospitality.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>

        <div className={`${styles.app__aboutus_content_knife} flex__center`}>
          <img src={knife} alt="" />
        </div>

        <div className={styles.app__aboutus_content_history}>
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={spoon} alt="" className="spoon__img" />
          <p className="p__opensans">
            Founded on a profound reverence for craftsmanship and the rhythm of
            the seasons, our kitchen is a sanctuary where tradition and modern
            culinary artistry meets.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

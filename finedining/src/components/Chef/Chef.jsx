import * as images from "../../index.js";
import styles from "../Chef/chef.module.css";
import { SubHeading } from "../SubHeading/SubHeading";

export const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse ">
        <img src={images.chef} alt="" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>
        <div className={styles.app__chef_content}>
          <div className={styles.app__chef_content_quote}>
            <img src={images.quote} alt="" />
            <p className="p__opensans">
              Gastronomy is an art form driven by patience, precision, and
              profound respect for the earth. At Gericht, we view every dish as
              a canvas and every service as a curated journey for your senses.
              Culinary excellence demands meticulous attention to detail,
              ensuring every reduction, sear, and plating decision is executed
              with deliberate artistry.
            </p>
          </div>
          <p className="p__opensans">
            We honor the rhythm of nature by letting our menus evolve with the
            seasons, celebrating ingredients at the exact peak of their flavor
            and expression. Because dining is an immersive sensory experience,
            our hospitality strives to anticipate your needs with grace,
            discretion, and genuine warmth.
          </p>
        </div>

        <div className={styles.app__chef_sign}>
          <p>Kevin Lou</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="" />
        </div>
      </div>
    </div>
  );
};

import styles from "../Newsletter/newsletter.module.css";
import { SubHeading } from "../SubHeading/SubHeading";

export const Newsletter = () => {
  return (
    <div className={styles.app__newsletter}>
      <div className={styles.app__newsletter_heading}>
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
        <p className="p__opensans">And Never Miss the Lastest Updates</p>
      </div>
      <div className={`${styles.app__newsletter_input} flex__center`}>
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter your email address"
        />
        <button type="button" className="custom__button">
          Subscribe
        </button>
      </div>
    </div>
  );
};

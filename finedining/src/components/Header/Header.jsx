import styles from "../Header/header.module.css";
import { SubHeading } from "../SubHeading/SubHeading";
import welcome from "../../assets/welcome.png";
export const Header = () => {
  return (
    <div
      className={`${styles.app__header} app__wrapper section__padding`}
      id="home"
    >
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavor" />
        <h1 className={styles.app__header_h1}>The Key to Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Exceptional food, Unforgettable moments.
        </p>
        <button type="button" className="custom__button">
          Explore Our Menu
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={welcome} alt="" />
      </div>
    </div>
  );
};

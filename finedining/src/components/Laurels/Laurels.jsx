import styles from "../Laurels/laurels.module.css";
import * as images from "../../index";
import { wines, cocktails, awards } from "../../data";
import { SubHeading } from "../SubHeading/SubHeading";
import { AwardCard } from "../AwardCard/AwardCard";

export const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__heading" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & Recognition" />

        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className={styles.app__laurels_awards}>
          {awards.map((award) => {
            return <AwardCard award={award} key={award.title} />;
          })}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="" />
      </div>
    </div>
  );
};

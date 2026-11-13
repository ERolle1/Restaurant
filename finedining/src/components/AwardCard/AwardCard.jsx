import styles from "../AwardCard/awardcard.module.css";

export const AwardCard = ({ award }) => {
  return (
    <div className={styles.app__awardcard}>
      <img src={award.imgUrl} alt="" />
      <div className={styles.app__awardcard_content}>
        <p className="p__cormorant" style={{ color: "#dcca87" }}>
          {award.title}
        </p>
        <p className="p__cormorant">{award.subtitle}</p>
      </div>
    </div>
  );
};

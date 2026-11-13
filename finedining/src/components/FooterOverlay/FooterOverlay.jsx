import styles from "../FooterOverlay/footeroverlay.module.css";
export const FooterOverlay = () => {
  return (
    <div className={styles.app__footeroverlay}>
      <div className={styles.app__footeroverlay_black}></div>
      <div className={`${styles.app__footeroverlay_img} app__bg`}></div>
    </div>
  );
};

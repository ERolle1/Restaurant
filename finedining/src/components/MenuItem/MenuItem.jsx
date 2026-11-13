import styles from "../MenuItem/menuitem.module.css";

export const MenuItem = ({ title, price, tags }) => {
  return (
    <div className={styles.app__menuitem}>
      <div className={styles.app__menuitem_head}>
        <div className={styles.app__menuitem_name}>
          <p className="p__cormorant" style={{ color: "#dcca87" }}>
            {title}
          </p>
        </div>

        <div className={styles.app__menuitem_dash}></div>

        <div className={styles.app__menuitem_name}>
          <p className="p__cormorant">{price}</p>
        </div>
      </div>

      <div className={styles.app__menuitem_sub}>
        <p className="p__opensans" style={{ color: "#aaa" }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

import styles from "../SpecialMenu/specialmenu.module.css";
import * as images from "../../index.js";
import { wines, cocktails, awards } from "../../data.js";
import { SubHeading } from "../SubHeading/SubHeading.jsx";
import { MenuItem } from "../MenuItem/MenuItem.jsx";

export const SpecialMenu = () => {
  return (
    <div
      className={`${styles.app__specialmenu} flex__center section__padding`}
      id="menu"
    >
      <div className={styles.app__specialmenu_title}>
        <SubHeading title="Menu that fits your palette" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className={styles.app__specialmenu_menu}>
        <div className={`${styles.app__specialmenu_menu_wine} flex__center `}>
          <p className={styles.app__specialmenu_menu_heading}>Wine & Beer</p>
          <div className={styles.app__specialmenu_menu_items}>
            {wines.map((wine, index) => {
              return (
                <MenuItem
                  key={wine.title + index}
                  title={wine.title}
                  price={wine.price}
                  tags={wine.tags}
                />
              );
            })}
          </div>
        </div>

        <div className={styles.app__specialmenu_menu_img}>
          <img src={images.menu} alt="" />
        </div>

        <div
          className={`${styles.app__specialmenu_menu_cocktails} flex__center `}
        >
          <p className={styles.app__specialmenu_menu_heading}>Cocktails</p>
          <div className={styles.app__specialmenu_menu_items}>
            {cocktails.map((cocktail, index) => {
              return (
                <MenuItem
                  key={cocktail.title + index}
                  title={cocktail.title}
                  price={cocktail.price}
                  tags={cocktail.tags}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
};

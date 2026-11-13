import styles from "../Gallery/gallery.module.css";
import * as images from "../../index";
import { SubHeading } from "../SubHeading/SubHeading";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { useRef } from "react";

export const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const galleryImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];

  return (
    <div className={`${styles.app__gallery} flex__center`}>
      <div className={styles.app__gallery_content}>
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#aaa", marginTop: "2rem" }}>
          A glimpse into our kitchen, our dining room, and the moments shared at
          our table.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className={styles.app__gallery_images}>
        <div className={styles.app__gallery_images_container} ref={scrollRef}>
          {galleryImages.map((image, index) => {
            return (
              <div
                className={`${styles.app__gallery_images_card} flex__center`}
                key={index}
              >
                <img src={image} alt="" />
                <BsInstagram className={styles.gallery__image_icon} />
              </div>
            );
          })}
        </div>
        <div className={styles.app__gallery_images_arrows}>
          <BsArrowLeftShort
            className={styles.gallery__arrow_icon}
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className={styles.gallery__arrow_icon}
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

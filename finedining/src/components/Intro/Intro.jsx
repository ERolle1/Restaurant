import styles from "../Intro/intro.module.css";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import meal from "../../assets/meal.mp4";
import { useState, useRef } from "react";

export const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prev) => !prev);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className={styles.app__video}>
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      ></video>
      <div className={`${styles.app__video_overlay} flex__center`}>
        <div
          className={`${styles.app__video_overlay_circle} flex__center`}
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

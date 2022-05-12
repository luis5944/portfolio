import React from "react";
import { Slide } from "react-slideshow-image";
import styles from "./CertSlideShow.module.css";
const CertSlideShow = ({ images }) => {
  return (
    <Slide easing="ease" duration={7000} indicators>
      {images.map((image) => {
        const url = `${image.image}`;
        return (
          <div className={styles["each-slide"]} key={image.desc}>
            <div
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                alignItems: "end",
              }}
            >
              <span className={styles.description}>{image.desc}</span>
            </div>
          </div>
        );
      })}
    </Slide>
  );
};

export default CertSlideShow;

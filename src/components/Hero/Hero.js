import React from "react";
import styles from "./Hero.module.css";
import { ReactComponent as RightArrow } from "../../img/icon-arrow.svg";
import { ReactComponent as Left } from "../../img/icon-angle-left.svg";
import { ReactComponent as Right } from "../../img/icon-angle-right.svg";
import { bannerDetail } from "../../util/banner";

import { useState } from "react";
import useCurrentScreenSize from "../../hook/useCurrentScreenSize";

const Hero = () => {
  const [banner, setBanner] = useState(bannerDetail.banner1);
  const { width } = useCurrentScreenSize();

  const nextBanner = () => {
    if (banner === bannerDetail.banner1) {
      setBanner(bannerDetail.banner2);
    } else if (banner === bannerDetail.banner2) {
      setBanner(bannerDetail.banner3);
    } else {
      setBanner(bannerDetail.banner1);
    }
  };

  const prevBanner = () => {
    if (banner === bannerDetail.banner1) {
      setBanner(bannerDetail.banner3);
    } else if (banner === bannerDetail.banner3) {
      setBanner(bannerDetail.banner2);
    } else {
      setBanner(bannerDetail.banner1);
    }
  };

  return (
    <div className={styles.hero}>
      <div className={styles["hero__banner"]}>
        <img
          src={width > 1100 ? banner.img : banner.mimg}
          alt="Banner"
          className={styles["hero__banner-img"]}
        ></img>
        {width < 1101 ? (
          <div className={styles["hero__navigation"]}>
            <button
              onClick={prevBanner}
              className={styles["hero__navigation-button"]}
            >
              <Left />
            </button>
            <button
              onClick={nextBanner}
              className={styles["hero__navigation-button"]}
            >
              <Right />
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={styles["hero__description"]}>
        <div className={styles["hero__description-box"]}>
          <h1 className={styles["hero__description-title"]}>{banner.title}</h1>
          <p className={styles["hero__description-text"]}>
            {banner.description}
          </p>
          <button href="#" className={styles["hero__link"]}>
            Shop now
            <div className={styles["hero__link-arrow"]}>
              <RightArrow />
            </div>
          </button>
        </div>
        {width > 1100 ? (
          <div className={styles["hero__navigation"]}>
            <button
              onClick={prevBanner}
              className={styles["hero__navigation-button"]}
            >
              <Left />
            </button>
            <button
              onClick={nextBanner}
              className={styles["hero__navigation-button"]}
            >
              <Right />
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Hero;

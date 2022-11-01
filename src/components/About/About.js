import React from "react";
import about1 from "../../img/image-about-dark.jpg";
import about2 from "../../img/image-about-light.jpg";

import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <img src={about1} alt="About Light"></img>
      <div className={styles["about__content"]}>
        <div className={styles["about__content-box"]}>
          <h2 className={styles["about__title"]}>About our furniture</h2>
          <p className={styles["about__description"]}>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
      </div>
      <img src={about2} alt="About Dark"></img>
    </div>
  );
};

export default About;

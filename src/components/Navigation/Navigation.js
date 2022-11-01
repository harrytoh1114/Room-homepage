import React, { useEffect, useState } from "react";
import useCurrentWidth from "../../hook/useCurrentScreenSize";
import { ReactComponent as Hamburger } from "../../img/icon-hamburger.svg";
import { ReactComponent as Close } from "../../img/icon-close.svg";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const { width, height } = useCurrentWidth();
  const [navStyle, setNavStyle] = useState();
  const [triggerNav, setTriggerNav] = useState(false);

  const triggerNavController = () => {
    setTriggerNav((prevState) => !prevState);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setNavStyle(`${styles.navigation} ${styles.scroll}`);
      } else {
        setNavStyle(styles.navigation);
      }
    });
  }, [height]);

  return (
    <>
      {width > 1100 ? (
        <nav className={styles.navigation}>
          <p className={styles["navigation__title"]}>room</p>
          <ul className={styles["navigation__list"]}>
            <li>
              <a href="#" className={styles["navigation__link"]}>
                home
              </a>
            </li>
            <li>
              <a href="#" className={styles["navigation__link"]}>
                shop
              </a>
            </li>
            <li>
              <a href="#" className={styles["navigation__link"]}>
                about
              </a>
            </li>
            <li>
              <a href="#" className={styles["navigation__link"]}>
                contact
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <nav
          className={
            triggerNav ? `${styles.navigation} ${styles.open}` : navStyle
          }
        >
          {triggerNav ? (
            <>
              <Close
                className={styles["navigation__link-close"]}
                onClick={triggerNavController}
              />
              <ul className={styles["navigation__list-mobile"]}>
                <li>
                  <a href="#" className={styles["navigation__link-mobile"]}>
                    home
                  </a>
                </li>
                <li>
                  <a href="" className={styles["navigation__link-mobile"]}>
                    shop
                  </a>
                </li>
                <li>
                  <a href="#" className={styles["navigation__link-mobile"]}>
                    about
                  </a>
                </li>
                <li>
                  <a href="#" className={styles["navigation__link-mobile"]}>
                    contact
                  </a>
                </li>
              </ul>
            </>
          ) : (
            <>
              <Hamburger
                className={styles["navigation__link-close"]}
                onClick={triggerNavController}
              />
              <p className={styles["navigation__title--mobile"]}>room</p>
            </>
          )}
        </nav>
      )}
    </>
  );
};

export default Navigation;

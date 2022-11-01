import React, { useEffect, useState } from "react";
import useCurrentWidth from "../../hook/useCurrentScreenSize";
import { ReactComponent as Hamburger } from "../../img/icon-hamburger.svg";
import { ReactComponent as Close } from "../../img/icon-close.svg";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const { width, height } = useCurrentWidth();
  const [navStyle, setNavStyle] = useState(styles.navigation);
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
              <button href="#" className={styles["navigation__link"]}>
                home
              </button>
            </li>
            <li>
              <button href="#" className={styles["navigation__link"]}>
                shop
              </button>
            </li>
            <li>
              <button href="#" className={styles["navigation__link"]}>
                about
              </button>
            </li>
            <li>
              <button href="#" className={styles["navigation__link"]}>
                contact
              </button>
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
                  <button
                    href="#"
                    className={styles["navigation__link-mobile"]}
                  >
                    home
                  </button>
                </li>
                <li>
                  <button
                    href="#"
                    className={styles["navigation__link-mobile"]}
                  >
                    shop
                  </button>
                </li>
                <li>
                  <button
                    href="#"
                    className={styles["navigation__link-mobile"]}
                  >
                    about
                  </button>
                </li>
                <li>
                  <button
                    href="#"
                    className={styles["navigation__link-mobile"]}
                  >
                    contact
                  </button>
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

import { IMediaContext, MediaContext } from "@components/MediaContextProvider";
import { useContext } from "react";

import styles from "./MediaContent.module.scss";

export const MediaContent = () => {
  const { device } = useContext<IMediaContext>(MediaContext);

  return (
    <div className={styles.root}>
      <div className={styles.deviceRow}>
        <div
          className={`${styles.indicator} ${
            device.isDesktop ? styles.indicator_activeDesktop : ""
          }`}
        />
        <span>Desktop</span>
      </div>

      <div className={styles.deviceRow}>
        <div
          className={`${styles.indicator} ${device.isTablet ? styles.indicator_activeTablet : ""}`}
        />
        <span>Tablet</span>
      </div>

      <div className={styles.deviceRow}>
        <div
          className={`${styles.indicator} ${device.isMobile ? styles.indicator_activeMobile : ""}`}
        />
        <span>Mobile</span>
      </div>
    </div>
  );
};

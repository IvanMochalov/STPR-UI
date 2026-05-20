import { IMediaContext, MediaContext } from "@components/MediaContextProvider";
import { useContext } from "react";

export const MediaContent = () => {
  const { device } = useContext<IMediaContext>(MediaContext);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
        fontFamily: "ALSHauss",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: device.isDesktop ? "#4CAF50" : "#E0E0E0",
          }}
        />
        <span>Desktop</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: device.isTablet ? "#2196F3" : "#E0E0E0",
          }}
        />
        <span>Tablet</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: device.isMobile ? "#FF9800" : "#E0E0E0",
          }}
        />
        <span>Mobile</span>
      </div>
    </div>
  );
};

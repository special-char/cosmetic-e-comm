import React from "react";
import Image from "next/image";
import Styles from "./banner.module.css";
import Button from "../Button";
import { BannerPropsType } from "@/utils/types";

const Banner = ({ data }: BannerPropsType) => {
  return (
    <section className={Styles.gridSection}>
      <div className={Styles.contentWrapper}>
        <div className={Styles.content}>
          <h2 className={Styles.heading}>{data.heading}</h2>
          {data.description && (
            <p className={Styles.description}>&quot;{data.description}&quot;</p>
          )}
        </div>
        <div className={Styles.bannerButtons}>
          {data.actionBtn1 && (
            <Button variant="fill" color="yellow">
              {data.actionBtn1}
            </Button>
          )}
          {data.actionBtn2 && (
            <Button variant="outlined" color="light">
              {data.actionBtn2}
            </Button>
          )}
        </div>
      </div>
      {data.backgroundBannerImage && (
        <div className={Styles.backgroundBannerImage}>
          <Image
            src={data.backgroundBannerImage}
            alt={"Banner Image"}
            fill
            style={{ objectFit: "contain" }}
            className="z-10"
          />
        </div>
      )}
    </section>
  );
};

export default Banner;

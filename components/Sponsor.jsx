import React from "react";
import styles from "../styles/Sponsor.module.css";
import OptionBox from "./OptionBox";

const Sponsor = () => {
  return (
    <div className={styles.sponsor}>
      <div className="heading">Donate</div>
      <div className={styles.options}>
        <OptionBox />
        <OptionBox />
        <OptionBox />
        <OptionBox />
        <OptionBox />
      </div>
    </div>
  );
};

export default Sponsor;

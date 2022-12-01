import React from "react";
import styles from "./Head.module.css";
import star from "../../images/icon-star.png";

const Head = () => {
  return (
    <div className={styles.main}>
      <img src={star} alt="icon" className={styles.icon} />
      <p className={styles.header}>How did we do?</p>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </div>
  );
};

export default Head;

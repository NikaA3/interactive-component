import React from "react";
import Completed from "../../images/illustration-thank-you.svg";
import styles from "./Thanku.module.css";

const Thanku = (props: any) => {
  const { currentNumber } = props;

  return (
    <div className={styles.mainThanku}>
      <img src={Completed} alt="thank-u" className={styles.image} />
      <p className={styles.counter}>You selected {currentNumber} out of 5</p>
      <p className={styles.madloba}>Thank You!</p>
      <p className={styles.context}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Thanku;

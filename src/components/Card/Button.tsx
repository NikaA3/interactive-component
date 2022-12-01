import React from "react";
import styles from "./Card.module.css";
const Button = (props: any) => {
  const { isSelected, handleSelect, currentNumber, content, setCurrentNumber } =
    props;
  return (
    <div
      onClick={() => {
        handleSelect(currentNumber);
        setCurrentNumber(currentNumber);
      }}
      className={isSelected === currentNumber ? styles.selected : styles.button}
    >
      {content}
    </div>
  );
};

export default Button;

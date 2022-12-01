import React, { useState } from "react";
import Head from "../Head/Head";
import Button from "./Button";
import Submit from "../Submit/Submit";
import styles from "./Card.module.css";

const Card = (props: {
  setIsVisible: (bool: boolean) => void;
  setCurrentNumber: (num: null) => void;
  isVisible: boolean;
}) => {
  const { setIsVisible, isVisible, setCurrentNumber } = props;
  const [isSelected, setIsSelected] = useState<number | null>(null);

  const buttons = [
    { currentNumber: 1, content: "1" },
    { currentNumber: 2, content: "2" },
    { currentNumber: 3, content: "3" },
    { currentNumber: 4, content: "4" },
    { currentNumber: 5, content: "5" },
  ];

  const handleSelect = (activeButton: number) => {
    if (isSelected === activeButton) {
      setIsSelected(null);
    } else {
      setIsSelected(activeButton);
    }
  };

  return (
    <div className={styles.main}>
      <Head />
      <div className={styles.buttons}>
        {buttons.map((btn) => (
          <Button
            key={btn.currentNumber}
            isSelected={isSelected}
            handleSelect={handleSelect}
            currentNumber={btn.currentNumber}
            content={btn.content}
            setCurrentNumber={setCurrentNumber}
          />
        ))}
      </div>
      <Submit setIsVisible={setIsVisible} isVisible={isVisible} />
    </div>
  );
};

export default Card;

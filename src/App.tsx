import React, { useState } from "react";
import styles from "./App.module.css";
import Card from "./components/Card/Card";
import Thanku from "./components/Completed/Thanku";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNumber, setCurrentNumber] = useState(null);

  return (
    <div className={styles.App}>
      <div className={styles.main}>
        {isVisible ? (
          <Thanku currentNumber={currentNumber} />
        ) : (
          <Card
            setIsVisible={setIsVisible}
            isVisible={isVisible}
            setCurrentNumber={setCurrentNumber}
          />
        )}
      </div>
    </div>
  );
};

export default App;

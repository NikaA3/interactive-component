import styles from "./Submit.module.css";

const Submit = (props: {
  setIsVisible: (bool: boolean) => void;
  isVisible: boolean;
}) => {
  const { setIsVisible, isVisible } = props;

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={styles.submit} onClick={handleClick}>
      Submit
    </div>
  );
};

export default Submit;

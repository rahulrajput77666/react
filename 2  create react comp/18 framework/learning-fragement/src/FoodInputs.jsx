import styles from "./FoodInputs.module.css";
const FoodInputs = ({ handleKeyDown }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter the food Item  here"
        className={styles.foodInput}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};
export default FoodInputs;

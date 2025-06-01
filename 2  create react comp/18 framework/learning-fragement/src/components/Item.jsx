import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li
      className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;

// import styles from "./Item.module.css";
// const Item = ({ fooditem,handleBuyButton }) => {
//   const handleButtonClicked = () => {
//     console.log(`${fooditem} being bought`);
//   };

//   return (
//     <>
//       <li className={`${styles["kg-item"]} list-group-item`}>
//         {fooditem}
//         <button
//           className={`btn btn-info ${styles.button}`}
//           onClick={handleBuyButton}
//         >
//           Buy
//         </button>
//       </li>
//     </>
//   );
// };
// export default Item;

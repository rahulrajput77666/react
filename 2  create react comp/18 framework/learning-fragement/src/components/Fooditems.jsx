import Item from "./item";
import { useState } from "react";
const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;

// import Item from "./item";
// const Fooditems = ({ items }) => {
//   return (
//     <ul className="list-group">
//       {items.map((item) => (
//         <Item key={item} fooditem={item} handleBuyButton={()=>console.log(`${item} bought`)}></Item>
//       ))}
//     </ul>
//   );
// };

// export default Fooditems;

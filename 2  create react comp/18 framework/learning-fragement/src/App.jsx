import Fooditems from "./components/Fooditems";
import Errormsg from "./components/errormsg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./Container";
import FoodInputs from "./FoodInputs";
import { useState } from "react";
function App() {
  let [foodItems, setFoodItems] = useState([]);
  // let [textToShow, setTextState] = useState( );
  // console.log(`current value of textstate :${textToShow}`);
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };
  return (
    <Container>
      <h1 className="food-heading">Healthy food </h1>
      <Errormsg items={foodItems}></Errormsg>
      <FoodInputs handleKeyDown={onKeyDown}></FoodInputs>

      <Fooditems items={foodItems}></Fooditems>
    </Container>
  );
}
export default App;

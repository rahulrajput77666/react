import Appname from "./components/Appname";
import Head from "./components/Head";
import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  const todoItems=[
    {
     name:"milk",
     dueDate:"15-05-2025",
  },
  {
    name:"tea",
    dueDate:"15-05-2025",
 },
 {
  name:"coffee",
  dueDate:"15-05-2025",
},
];
  return (
    <center className="todo-container">
      <Appname />
      {/* <AddTodo /> */}
      <Head/>
      <TodoItems todoItems={todoItems}/>
    </center>
  );
}

export default App;

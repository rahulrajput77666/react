import Appname from "./components/Appname";
import Head from "./components/Head";
import Elements1 from "./Elements1";
import Elements2 from "./Elements2";
import"./App.css";
function App() {
  return (
    <div className="container">
      <Appname></Appname>
      <div className="element-class">
      <Head></Head>
      <Elements1></Elements1>
      <Elements2></Elements2>
    </div>
    </div>
  );
}

export default App;

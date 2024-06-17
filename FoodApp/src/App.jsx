import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContaner from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId,setFoodId]=useState("658615");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContaner>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContaner>
        <InnerContaner>
          <FoodDetails foodId={foodId}/>
        </InnerContaner>
      </Container>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import "./Components/Home.css"
import { Route, Routes } from "react-router-dom";
import { Cart } from "./Components/Cart";
import { Details } from "./Components/Details";

import { Home } from "./Components/Home";
function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/details" element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;

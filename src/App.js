import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BigDeviceApp from "./TheTwoTypesOfScreen/LaptopOrLesser/BigDeviceApp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <BigDeviceApp />
      </div>
    </BrowserRouter>
  );
}

export default App;

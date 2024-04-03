import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

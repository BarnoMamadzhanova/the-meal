import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
        <Link to="/details">Details</Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;

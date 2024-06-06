import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
// import "./styles/Reset.css";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/details" element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

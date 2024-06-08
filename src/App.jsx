import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import HomePage from "./pages/HomePage";
import MealDetails from "./components/MealDetails/MealDetails";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:id" element={<MealDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar>
          <Routes>
            <Route>
              <Route path="/home">element={<Home />}</Route>
            </Route>
          </Routes>
        </Navbar>
      </Router>
      <h1>Hello team! Here is will be our UI 😛</h1>
    </div>
  );
}

export default App;

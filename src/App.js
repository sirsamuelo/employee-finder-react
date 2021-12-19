import "./App.css";
import Navbar from "./components/layout/Navbar";
import Listing from "./components/screens/Listing";
import Detail from "./components/screens/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StrictMode from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Listing />} exact />
          <Route path="/detail/:id" element={<Detail />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

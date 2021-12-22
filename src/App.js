import "./App.css";
import Navbar from "./components/layout/Navbar";
import Listing from "./components/screens/Listing";
import Detail from "./components/screens/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListingProvider } from "./components/context/ListingContext";
import { DetailProvider } from "./components/context/DetailContext";

function App() {
  return (
    <div className="App">
      <ListingProvider>
        <DetailProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Listing />} exact />
              <Route path="/detail/:id" element={<Detail />} exact />
            </Routes>
          </Router>
        </DetailProvider>
      </ListingProvider>
    </div>
  );
}

export default App;

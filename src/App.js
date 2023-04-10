import { BrowserRouter, Routes, Route  } from "react-router-dom";
import ScrollToTop from "./config/ScrollToTop";
import logo from './logo.svg';
import './App.scss';
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

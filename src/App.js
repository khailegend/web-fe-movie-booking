import { BrowserRouter, Routes, Route  } from "react-router-dom";
import ScrollToTop from "./config/ScrollToTop";
import logo from './logo.svg';
import './App.scss';
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import BookingTicket from "./pages/BookingTicket";
import Home from "./pages/Home";
import DetailMovie from "./pages/DetailMovie";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ClusterCinema from "./pages/ClusterCinema";
import AllMovie from "./pages/AllMovie";
import Profile from "./pages/Profile";
import News from "./pages/News";
function App() {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/moviedetail/:maphim"
            element={<DetailMovie/>}
          />
          <Route
            exact
            path="/booking/:maLichChieu"
            element={<BookingTicket/>}
          />

          <Route exact path="/login"  element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/clustercinema" element={<ClusterCinema/>} />
          <Route exact path="/allmovie" element={<AllMovie/>}  />
          <Route exact path="/profile"  element={<Profile/>} />
          <Route exact path="/news" element={<News/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import './App.scss';
import Home from "./pages/Home/Home";
import WishList from "./pages/wish_list/WishList";
import Search from "./pages/search/Search";
import Calendar from "./pages/calendar/Calendar";
import MyTrip from "./pages/my_trip/MyTrip";
import MainLayout from "./components/layout/MainLayout";
import NotFound from "./components/common/not_found/NotFound";
function App() {

  return (
    <>
      <Router>
         <Routes>
         <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/search" element={<Search />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/my-trip" element={<MyTrip />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import './App.scss';
import Home from "./pages/home/home";
import WishList from "./pages/wish-list/wish-list";
import Search from "./pages/search/search";
import Calendar from "./pages/calendar/calendar";
import MyTrip from "./pages/my-trip/my-trip";
import MainLayout from "./components/layout/main-layout";
import NotFound from "./components/common/not-found/not-found";
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

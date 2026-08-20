import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Reservation from "./Pages/Reservation";
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/reservation" element={<Reservation />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
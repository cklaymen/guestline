import React from "react";

import Header from "./components/Header";
import HotelsList from "./components/HotelsList";

function App() {
  return (
    <div className="flex flex-col items-stretch">
      <Header />
      <HotelsList />
    </div>
  );
}

export default App;

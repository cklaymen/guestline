import React from "react";

import Header from "./components/Header";
import HotelsList from "./components/HotelsList";
import FiltersProvider from "./hooks/useFilters/FiltersProvider";

function App() {
  return (
    <FiltersProvider>
      <div className="flex flex-col items-stretch">
        <Header />
        <HotelsList />
      </div>
    </FiltersProvider>
  );
}

export default App;

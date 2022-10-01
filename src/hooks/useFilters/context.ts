import React, { createContext } from "react";

interface FilterContext {
  rating: number | null;
  adults: number;
  children: number;
  setRating: React.Dispatch<React.SetStateAction<number | null>>;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  setChildren: React.Dispatch<React.SetStateAction<number>>;
}

const setterPlaceholder = () => {
  throw new Error("Should use in FilterContext");
};

const filtersContext = createContext<FilterContext>({
  rating: null,
  adults: 1,
  children: 0,
  setRating: setterPlaceholder,
  setAdults: setterPlaceholder,
  setChildren: setterPlaceholder,
});

export default filtersContext;

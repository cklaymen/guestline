import { ReactNode, useState } from "react";
import filtersContext from "./context";

const ContextProvider = filtersContext.Provider;

const FiltersProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [rating, setRating] = useState<number | null>(null);
  const [adults, setAdults] = useState<number>(1);
  const [numberOfChildren, setChildren] = useState<number>(0);
  return (
    <ContextProvider
      value={{
        rating,
        adults,
        children: numberOfChildren,
        setRating,
        setAdults,
        setChildren,
      }}
    >
      {children}
    </ContextProvider>
  );
};

export default FiltersProvider;

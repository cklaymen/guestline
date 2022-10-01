import { useContext } from "react";
import filtersContext from "./context";

const useFilters = () => useContext(filtersContext);

export default useFilters;
